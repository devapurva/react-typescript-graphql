import { gql } from "@apollo/client";

export const GET_JOBS_LIST = gql`
  {
    jobs {
      id
      title
      tags {
        id
        name
      }
      company {
        id
        name
        websiteUrl
        logoUrl
      }
      cities {
        id
        name
        country {
          name
          id
          isoCode
        }
      }
      countries {
        id
        name
        isoCode
      }
      remotes {
        id
        name
        type
      }
    }
  }
`;
