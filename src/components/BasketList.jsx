import {BasketItem} from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context";


export const BasketList = (props) =>{
    const {
        useComponentVisible,
    }=props
    const {order,handleBasketShow} = useContext(ShopContext)
    const {ref,isComponentVisible} = useComponentVisible(true)

    const totalPrice = order.reduce((sum,el) => {
        return sum + el.finalPrice * el.quantity
    },0)

    return(<>
            {isComponentVisible &&
                <div  className="basket-bg">
                    <ul className="collection basket" ref={ref}>
                        <li
                            className="collection-item purple lighten-2 white-text"
                        >Корзина</li>
                    {
                        order.length ? order.map(item =>(
                            <BasketItem
                                key={item.mainId}{...item}
                            />
                        )):<li className="collection-item ">В корзине пусто</li>

                    }
                    <li
                        className="collection-item item-desc purple lighten-2 white-text "
                    ><button className={'btn'}>Продолжить</button>
                        <span className={'right text-bold'}>Цена:{totalPrice}</span>

                    </li>
                    <i
                        className="close material-icons basket-close white-text"
                        onClick={handleBasketShow}>close
                    </i>
                </ul>
        </div>
            }
    </>
    )
}