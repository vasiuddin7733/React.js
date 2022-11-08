import { gql } from "@apollo/client";

export const User = {
  fragments: {
    UserBasicData: gql`
      fragment UserBasicData on User {
        id
        photoUrl
        name
        email
        schoolClass
        graduation
        schools {
          name
        }
        languages {
          name
          level
        }
      }
    `,
    UserData: gql`
      fragment UserData on User {
        id
        name
        surname
        birthDate
        email
        verified
        verificationToken
        gender
        userType
        postcode
        city
        street
        houseNumber
        class
        languages {
          id
          name
        }
        photoUrl
        schoolClass
      }
    `,
  },
};

export const News = {
  fragments: {
    NewsData: gql`
      fragment NewsData on NewsItem {
        id
        slug
        name
        content
        createdAt
        photoUrl
        published
        promote
        previous {
          id
          slug
          name
          photoUrl
        }
        next {
          id
          slug
          name
          photoUrl
        }
        videoUrls
      }
    `,
  },
};
