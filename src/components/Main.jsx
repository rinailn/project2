import React, {useRef, useState} from "react";
import {useEffect,useContext} from "react";
import {ShopContext} from "../context";
import {API_URL,API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {BasketList} from "./BasketList";


export const Main = () =>{
    const {setGoods,loading,isBasketShow,} = useContext(ShopContext)
    useEffect(function getGoods(){
        fetch(API_URL,{
            headers: {
                'Authorization':API_KEY
            },
        })
            .then((response)=>response.json())
            .then((data) =>{
                setGoods(data.shop)
            })
    },[])

    function useComponentVisible(initialIsVisible) {
        const [isComponentVisible, setIsComponentVisible] = useState(
            initialIsVisible
        );
        const ref = useRef(null);

        const handleHideDropdown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsComponentVisible(false);
            }return{
                isBasketShow: false
            }
        };

        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }return{
                isBasketShow: false
            }
        };

        useEffect(() => {
            document.addEventListener("keydown", handleHideDropdown, true);
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("keydown", handleHideDropdown, true);
                document.removeEventListener("click", handleClickOutside, true);
            };
        });

        return { ref, isComponentVisible, setIsComponentVisible };
    }


    return (
        <main className='main-content  valign-wrapper'>
            {
                loading?<Preloader/>:<GoodsList/>
            }
            {isBasketShow && (
                <BasketList useComponentVisible={useComponentVisible}/>
            )}
        </main>

    )
}
