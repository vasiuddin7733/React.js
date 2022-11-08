import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import decode from "jwt-decode";
// import { uncrunch } from "graphql-crunch";
import {
  APP,
  SERVER_MESSAGES,
  AUTH,
  CLIENT_AUTH_REQUEST_TYPE,
  CLIENT_AUTHENTICATION_METHOD,
  JWT,
  CRUNCH,
} from "./_config";
import history from "../history";

const uncruncher = new ApolloLink((operation, forward) =>
  forward(operation)?.map(response => {
    response.data = uncrunch(response.data);
    return response;
  }),
);

const { UNAUTHORIZED, FORBIDDEN } = SERVER_MESSAGES;

const { ROUTES: { LOGIN } = {} } = APP;

const opts = {
  credentials: "same-origin",
  headers: {
    [AUTH.STRATEGIES.CLIENT.AUTH_HEADER]: CLIENT_AUTH_REQUEST_TYPE,
  },
};

const useLocalStorage = CLIENT_AUTHENTICATION_METHOD.LOCAL_STORAGE;

const apolloCache = new InMemoryCache();

const uri =
  CRUNCH && CRUNCH.USE
    ? `${APP.ENDPOINT.GRAPHQL}?crunch=${CRUNCH.VERSION}`
    : APP.ENDPOINT.GRAPHQL;

const httpLink = new HttpLink({
  uri,
  ...opts,
});

const gatewayUri = APP.GATEWAY.GRAPHQL;
// const gatewayUri = `https://staging-elearning.seidual.berlin/${APP.GATEWAY.GRAPHQL}`;

const httpGatewayLink = new HttpLink({
  uri: gatewayUri,
  ...opts,
});

const authMiddlewareLink = setContext(() => {
  const headers = {
    headers: {
      [JWT.HEADER.TOKEN.NAME]:
        localStorage.getItem(JWT.LOCAL_STORAGE.TOKEN.NAME) || null,
      [JWT.HEADER.REFRESH_TOKEN.NAME]:
        localStorage.getItem(JWT.LOCAL_STORAGE.REFRESH_TOKEN.NAME) || null, // eslint-disable-line
    },
  };

  if (headers.headers[JWT.HEADER.REFRESH_TOKEN.NAME]) {
    const currentTime = Date.now().valueOf() / 1000;
    const tokenExpiration = decode(
      headers.headers[JWT.HEADER.REFRESH_TOKEN.NAME],
    ).exp;
    if (currentTime > tokenExpiration) {
      history.push(LOGIN);
    }
  }
  return headers;
});

const afterwareLink = new ApolloLink((operation, forward) =>
  forward(operation)?.map(response => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const token = headers.get(JWT.HEADER.TOKEN.NAME);
      const refreshToken = headers.get(JWT.HEADER.REFRESH_TOKEN.NAME);

      if (token) {
        localStorage.setItem(JWT.LOCAL_STORAGE.TOKEN.NAME, token);
      }

      if (refreshToken) {
        localStorage.setItem(
          JWT.LOCAL_STORAGE.REFRESH_TOKEN.NAME,
          refreshToken,
        );
      }
    }

    return response;
  }),
);

const errorLink = onError(({ graphQLErrors = [], networkError = {} }) => {
  const redirect =
    (networkError && networkError.statusCode) ||
    (graphQLErrors && graphQLErrors.length > 0);
  if (redirect) {
    let { statusCode } = networkError;
    if (!statusCode) {
      const errors = graphQLErrors.filter(
        e => e.status === 403 || e.status === 401,
      );
      const { status = 200 } = errors[0] || {};
      statusCode = status;
    }
    if (statusCode === 401) {
      console.warn(`You've attempted to access ${UNAUTHORIZED} section`);
      if (history?.location?.pathname !== LOGIN) {
        history.push(LOGIN);
      }
    }
    if (statusCode === 403) {
      console.warn(`You've attempted a ${FORBIDDEN} action`);
      history.push("/error-page/403");
    }
    if (statusCode >= 500) {
      console.warn("SERVER ERROR");
      history.push(`/error-page/${networkError.statusCode}`);
    }
  }
});
// Handle Gateway's calls
const splittedLink = ApolloLink.split(
  operation =>
    APP.GATEWAY.SERVICES.find(service =>
      operation?.query?.loc?.source?.body?.includes(service),
    ),
  httpGatewayLink,

  CRUNCH && CRUNCH.USE ? ApolloLink.concat(uncruncher, httpLink) : httpLink,
);

let links = [errorLink, splittedLink];

if (useLocalStorage) {
  links = [errorLink, afterwareLink, authMiddlewareLink, splittedLink];
}

const link = ApolloLink.from(links);

const client = new ApolloClient({
  link,
  cache: apolloCache,
  connectToDevTools: true,
});

const resetLocalStorageTokens = () => {
  localStorage.removeItem(JWT.LOCAL_STORAGE.TOKEN.NAME);
  localStorage.removeItem(JWT.LOCAL_STORAGE.REFRESH_TOKEN.NAME);
};

if (useLocalStorage) {
  client.onClearStore(() => resetLocalStorageTokens());
  client.onResetStore(() => resetLocalStorageTokens());
}

export default client;
