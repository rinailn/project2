import React from "react";
import {Cart} from "./Cart";

 const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper purple">
                <a href="#" className="brand-logo">Fortnite Shop</a>
                <ul id="nav-mobile" className="right ">
                    <li><a><Cart/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}