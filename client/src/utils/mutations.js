import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        friends {
          _id
          username
        }
        guilds {
          _id
          name
        }
        posts {
          _id
          title
          description
          comments {
            _id
            commentAuthor
            commentText
            createdAt
          }
        }
      }
    }
  }
`
