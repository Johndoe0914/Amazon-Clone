export const initialState = {
  basket: [
    {
      id: "12344543",
      title:
        "Instant Pot Duo Mini 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer",
      price: 12.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Vyt-4fD8L._AC_UL200_SR200,200_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      //Logic for removing item
      break;

    default:
      return state;
  }
};

export default reducer;
