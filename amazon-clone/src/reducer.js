export const initialState = {
  basket: [
    {
      id: "12344543",
      title: "The NEW Blink 4K HD  Security Camera",
      price: 12.99,
      rating: 3,
      image:
        "https://images.homedepot-static.com/productImages/7b5edb1a-feaa-48d1-9543-9805a336bb71/svn/black-blink-smart-security-camera-systems-b07mmz2ltb-64_400.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER:":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      //LOGIC FOR ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //clone basket
      let newBasket = [...state.basket];
      //check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket remove it
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
