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
        description
      }
      posts {
        _id
        title
      }
    }
  }
`

export const QUERY_ME = gql`
  query {
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
          email
        }
      }
    }
  }
`

export const QUERY_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      description
      author {
        _id
        username
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`

export const QUERY_POSTS = gql`
  query getPosts {
    getPosts {
      _id
      title
      description
      author {
        _id
        username
        email
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`

export const QUERY_GUILDS = gql`
  query getGuilds {
    getGuilds {
      _id
      name
      description
      icon
      owner {
        _id
        username
        email
      }
      members {
        _id
        username
        email
      }
    }
  }
`

export const QUERY_GUILD = gql`
  query getGuild($guildId: ID!) {
    getGuild(guildId: $guildId) {
      _id
      name
      description
      icon
      owner {
        _id
        username
        email
      }
      members {
        _id
        username
        email
      }
    }
  }
`
