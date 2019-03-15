import initialState from './initialState';
import {
  GET_DATA_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_DETAILS_SUCCESS,
  GET_DATA_FAILURE,
} from './actions';

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.id],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...state.cart].filter(item => {
          return item.id !== action.id;
        }),
      };

    case 'ADD_FILTER':
      return {
        ...state,
        filters: [...state.filters, action.name],
        products: [...state.products].filter(item => {
          return JSON.stringify(item)
            .toLowerCase()
            .includes(action.name.toLowerCase());
        }),
      };

    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: [...state.filters].filter(item => {
          return item.name === action.name;
        }),
      };

    case GET_DATA_REQUEST:
      return {
        ...state,
        dataLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        dataLoading: false,
      };

    case GET_DETAILS_SUCCESS:
      console.log(state);
      return {
        ...state,
        productDetails: action.productDetails,
        dataLoading: false,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        dataLoading: false,
        fetchError: action.error,
      };

    default:
      return state;
  }
}
