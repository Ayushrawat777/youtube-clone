const AppReducer = (state, action) => {
  switch (action.type) {
    case "Product_Error": {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case "Product_isLoading": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "changed_name": {
      return {
        ...state,
        query: action.payload,
      };
    } 
    case "Product_display":
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case "SingleProduct_isLoading":
      return {
        ...state,
        isSingleLoading: true,
        isSingleError: false,
      };
    case "SingleProduct_display":
      return {
        ...state,
        isSingleLoading: false,
        SingleMovie: action.payload,
      };
    case "SingleProduct_Error":
      return {
        ...state,
        isSingleError: true,
      };

    default:
      return state;
  }
};

export default AppReducer;
