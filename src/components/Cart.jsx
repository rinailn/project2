import {useContext} from "react";
import {ShopContext} from "../context";

export function Cart(){

const {order,handleBasketShow} = useContext(ShopContext)
    return(
        <div className='cart' onClick={()=>handleBasketShow()}>
            <i className="material-icons">shopping_cart</i>
            {order.length?(
                <span className="cart-quantity">{order.length}</span>
            ):null}
        </div>
    )
}