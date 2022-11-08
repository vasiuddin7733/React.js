import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import history from "../../history";
import { APP } from "../../apollo/_config";
import { CURRENT_USER_QUERY, LOGIN_MUTATION, LOGOUT_MUTATION } from "../../api";
import { hashString } from "../../utils";

const { ROUTES: { LOGIN } = {} } = APP;

const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

const useAuth = () => {
  const { data: { SEIDUAL_currentUser: currentUser } = {}, loading } = useQuery(
    CURRENT_USER_QUERY,
  );
  const [submitLogin] = useMutation(LOGIN_MUTATION);
  const [logoutMutation] = useMutation(LOGOUT_MUTATION);
  const client = useApolloClient();
  if (loading) return <p>Loading...</p>;
  const logout = (callback, { cacheOnly = false } = {}) => {
    if (cacheOnly) {
      client.clearStore();
    } else {
      client.resetStore();
    }
    logoutMutation();
    if (callback && isFunction(callback)) {
      callback(null, "success");
    } else history.push("/");
    console.log("You have logged out");
  };
  const login = ({ email, username, password }, callback) => {
    submitLogin({
      variables: {
        userCredentials: {
          email: email || username,
          password: hashString(password).digest,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: CURRENT_USER_QUERY,
        },
      ],
    })
      .then(res => {
        if (!!callback && isFunction(callback)) {
          callback(null, res);
        } else history.push("/");
        console.log("Login successful");
      })
      .catch(e => {
        // notify error
        // console.log(e)
        if (!!callback && isFunction(callback)) callback(e);
      });
  };
  return {
    user: currentUser,
    loading,
    login,
    logout,
    isLoggedIn: !!currentUser && !!Object.keys(currentUser).length,
  };
};

export default useAuth;
