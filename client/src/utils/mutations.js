import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const UPDATE_PRODUCT_QUANTITY = gql`
  mutation updateProductQuantity($productId: ID!, $purchaseQuantity: Int!) {
    updateProductQuantity(
      productId: $productId
      purchaseQuantity: $purchaseQuantity
    ) {
      _id
      quantity
    }
  }
`;

export const QUERY CHECKOUT = gql`
  query getCheckout {
    checkout {
      session
    }
  }
`;

export const QUERY USER = gql`
  query getUser {
    user {
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          category {
            name
          }
        }
      }
    }
  }
`;

