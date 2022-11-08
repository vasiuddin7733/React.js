import { gql } from "@apollo/client";
import { User, News } from "./_fragments";

// REMOTE
export const CONENCTION_QUERY = gql`
  query connection {
    connection
  }
`;

export const AUTH_QUERY = gql`
  query authenticate {
    SEIDUAL__checkAuth
  }
`;

export const CURRENT_USER_QUERY = gql`
  query SEIDUAL_currentUser {
    SEIDUAL_currentUser {
      ...UserData
    }
  }
  ${User.fragments.UserData}
`;

export const NEWS_QUERY = gql`
  query SEIDUAL_news {
    SEIDUAL_news(published: true) {
      ...NewsData
    }
  }
  ${News.fragments.NewsData}
`;

export const NEWS_ITEM_QUERY = gql`
  query SEIDUAL_newsItem($id: ID, $slug: String) {
    SEIDUAL_newsItem(id: $id, slug: $slug) {
      ...NewsData
    }
  }
  ${News.fragments.NewsData}
`;

export const SITE_DATA_QUERY = gql`
  query siteDataQuery {
    SEIDUAL_siteData {
      users
      jobs
      employers
    }
  }
`;
