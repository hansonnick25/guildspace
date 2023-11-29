import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $description: String
    $author: UserInput
  ) {
    createPost(title: $title, description: $description, author: $author) {
      _id
      title
      description
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    createComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      comments {
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`

export const JOIN_GUILD = gql`
  mutation joinGuild($username: String!, $guildId: ID!) {
    joinGuild(username: $username, guildId: $guildId) {
      guilds {
        _id
        name
        description
        owner {
          username
        }
      }
    }
  }
`
