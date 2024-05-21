import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods:[],
    loading:true,
    order:[],
    isBasketShow:false
}

export const ContextProvider = ({children}) =>{
    const [value,dispatch] = useReducer(reducer,initialState)

     value.removeFromBasket = (itemId) =>{
        dispatch({type:'REMOVE_FROM_BASKET',payload:{mainId:itemId}})
     }

     value.addToBasket = (item) =>{
        dispatch({type:'ADD_TO_BASKET',payload:item})
     }

    value.incQuantity = (itemId) =>{
        dispatch({type:'INCREMENT_QUANTITY',payload:{mainId: itemId}})
    }

    value.decQuantity = (itemId) =>{
        dispatch({type:'DECREMENT_QUANTITY',payload:{mainId: itemId}})
    }

    value.handleBasketShow = () =>{
        dispatch({type:'HANDLE_BASKET_SHOW'})
    }

    value.setGoods = (data) =>{
        dispatch({type:'SET_GOODS',payload:data})
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}