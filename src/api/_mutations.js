import { gql } from "@apollo/client";
import {} from "./_fragments";

// REMOTE
export const LOGIN_MUTATION = gql`
  mutation SEIDUAL_login($userCredentials: userCredentials!) {
    SEIDUAL_login(input: $userCredentials)
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation SEIDUAL_logout {
    SEIDUAL_logout
  }
`;

export const SAFE_S3_SIGN_MUTATION = gql`
  mutation safeS3SignMutation(
    $filename: String!
    $filetype: String!
    $type: String
    $forceCustomPath: Boolean
  ) {
    safeSignS3(
      filename: $filename
      filetype: $filetype
      type: $type
      forceCustomPath: $forceCustomPath
    ) {
      url
      signedRequest
    }
  }
`;

export const SEND_EMAIL_MUTATION = gql`
  mutation SEIDUAL_sendEmail($emailData: Json!) {
    SEIDUAL_sendEmail(emailData: $emailData)
  }
`;
