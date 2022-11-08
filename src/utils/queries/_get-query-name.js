import { getQueryDefinition } from "@apollo/client/utilities";

export default query => getQueryDefinition(query)?.name?.value;
