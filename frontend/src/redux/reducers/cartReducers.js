import * as actionType from '../constants/cartConstants';


export const cartReducer = (state = {cartItems: []}, action)=>{
    switch(action.type){
        case actionType.ADD_TO_CART:
            //get the item 
            const item = action.payload;
            // check if the item alread exists in the cart
            //product contains the id of the product in the cart
            const existItem = state.cartItems.find((x) => x.product ===item.product);

            if(existItem){
                return{
                    //spread the state 
                    ...state,
                    //go to cartItems and set the item to new cartItems which sets it to a new array
                    // and check if its the same with the existing item if so add the item in the array else set it to the current item in the array
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item: x),

                };
            }else{
                //else it means the item is new so we just push it to the cartItems array
                return{
                    // spread the state
                    ...state,
                    cartItems: [...state.cartItems , item],
                };
            }
            case actionType.REMOVE_FROM_CART:
                // if the action is to remove the item from the cart then filter through the array and map the item and remove it
                return{
                    ...state,
                    // filter through the cartItem and select every item which is not the item selected leaving the item from the new array
                    cartItems: state.cartItems.filter((x)=> x.product !== action.payload)

                };
            default:
                return state;
    }
}