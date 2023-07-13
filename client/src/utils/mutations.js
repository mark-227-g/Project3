import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addProfile($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
}
`;

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        userName
        email
        password
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

export const ADD_ORDER = gql`
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

export const QUERY_CHECKOUT = gql`
  query getCheckout {
    checkout {
      session
    }
  }
`;

export const QUERY_USER = gql`
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


