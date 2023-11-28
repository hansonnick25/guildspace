import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      email
      username
      guilds {
        _id
        name
      }
      posts {
        _id
        title
      }
    }
  }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      guilds {
        name
        icon
        _id
      }
      posts {
        _id
        title
        author {
          username
        }
      }
      pals {
        _id
        username
      }
    }
  }
`