export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';

const productsUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';
const productDetailsUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones';

export function getProducts() {
  return (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
    fetch(productsUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load products');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          products: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_DATA_FAILURE,
          error: error.message,
        });
      });
  }
}

export function getProductDetails(id) {
  return (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });

    fetch(`${productDetailsUrl}/${id}.json`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load details');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_DETAILS_SUCCESS,
          productDetails: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_DATA_FAILURE,
          error: error.message,
        });
      });
  }
}

//
export function addToCart(id) {
  return {
    type: 'ADD_TO_CART',
    id,
  };
}
