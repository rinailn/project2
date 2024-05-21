import {useContext} from "react";
import {ShopContext} from "../context";

export function GoodItem (props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{background}],
        price:{finalPrice},
    } = props
    const {addToBasket} = useContext(ShopContext)

    return(
                <div className="card card-item hoverable" id={mainId}>
                    <div className="card-image">
                        <img src={background} alt={displayName}/>
                        <span className={'card-title card__title text-bold center  accent-3 white-text'}>{displayName}</span>
                    </div>
                    <div className="card-content">
                        <p>{displayDescription}</p>
                    </div>
                    <div className="card-action card-desc">
                            <button
                            className='btn'
                            onClick={() =>
                                addToBasket({
                                    mainId,
                                    displayName,
                                    finalPrice,
                                    background,
                                })
                            }>Купить</button>

                        <div className="card-price">
                            <span className="text-bold">{finalPrice}</span>
                        </div>
                    </div>
                </div>
    )
}