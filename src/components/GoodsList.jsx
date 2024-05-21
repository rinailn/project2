import {GoodItem} from "./GoodItem";
import {useContext} from "react";
import {ShopContext} from "../context";

export function GoodsList(){
    const {goods=[]} = useContext(ShopContext)

    if (!goods.length){
        return <h3 className='center-align not-found'>NOTHING FOUND</h3>
    }
    return (
        <div className='goods'>
            {goods.map(item =>(
                <GoodItem key = {item.mainId} {...item}/>
            ))}
        </div>

    )
}