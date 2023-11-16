import React from "react";
import { useRef } from "react";


const CreditCard = () => {

    const cardFirst = useRef();
    const cardSecond = useRef();
    const cardThird = useRef();
    const cardFourth = useRef();

    const handleChangeFirst = (e) => {
        if (e.target.value.length == 4){
            cardSecond.current.focus();
        }
    }

    const handleChangeSecond = (e) => {
        if (e.target.value.length == 4){
            cardThird.current.focus();
        }
    }

    const handleChangeThird = (e) => {
        if (e.target.value.length == 4){
            cardFourth.current.focus();
        }
    }


    return (
        <div className="credit-card">
            <p>Zadej číslo své karty</p>
            <form>
                <input type="text" maxLength="4" ref={cardFirst} onChange={handleChangeFirst}/>
                <input type="text" maxLength="4" ref={cardSecond} onChange={handleChangeSecond}/>
                <input type="text" maxLength="4" ref={cardThird} onChange={handleChangeThird}/>
                <input type="text" maxLength="4" ref={cardFourth}/>
            </form>
        </div>        
    )
}

export default CreditCard