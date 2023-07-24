import React, { useState } from "react";
import './BurgerStyles.css';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";



export default function Burger() {
    const [lettuce, setLettuce]= useState(0);
    const [bacon, setBacon]= useState(0);
    const [cheese, setCheese]= useState(0);
    const [meat, setMeat]= useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    

    const addRemoveIngredient = (action, ingredient) => {
        switch (ingredient) {
            case 'lettuce':
                setLettuce(prevLettuce => action === 'add' ? prevLettuce + 1 : prevLettuce - 1);
                break;
            case 'bacon':
                setBacon(prevTomato => action === 'add' ? prevTomato + 1 : prevTomato - 1);
                break;
            case 'cheese':
                setCheese(prevCheese => action === 'add' ? prevCheese + 1 : prevCheese - 1);
                break;
            case 'meat':
                setMeat(prevMeat => action === 'add' ? prevMeat + 1 : prevMeat - 1);
                break;
            default:
                break;
        }
    };

    const calculateTotalPrice = () => {
        const lettucePrice = 0.5;
        const baconPrice = 0.7;
        const cheesePrice = 0.4;
        const meatPrice = 1.3;
    
        const totalPrice =
          lettuce * lettucePrice + bacon * baconPrice + cheese * cheesePrice + meat * meatPrice;
    
        return totalPrice.toFixed(2);
      };

    const burgerContent = () => {
        let burger = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++) {
            burger.push(<div key={burger.length} className="lettuce"></div>);
        }
        // outputting the bacon
        for (let i = 0; i < bacon; i++) {
            burger.push(<div key={burger.length} className="bacon"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className="cheese"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++) {
            burger.push(<div key={burger.length} className="meat"></div>);
        }

        if (burger.length === 0)
            burger.push(<p key="0">No Ingredients Added!</p>);

        return burger;
    };

    const totalIngredientsCount = lettuce + bacon + cheese + meat;
    const handleSignupClick = () => {
    
      };

    return (
        <>
            <div className="burgerIngredients">
                <div className="topSide"></div>
                {burgerContent()}
                <div className="bottomSide"></div>
            </div>
            <div className="ingredientsBlock">
                <div className="currentPrice">Current price: <strong>${calculateTotalPrice()}</strong></div>
                <div className="ingredient">
                
                <div className="ingrBtns">
                    <p>Lettuce:</p>
                    <button className="ingrBtn1" onClick={() => addRemoveIngredient('remove', 'lettuce')}>Less</button>
                    <button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'lettuce')}>More</button>
                    
                </div>
                
                <div className="ingrBtns">
                    <p>Bacon:</p>
                    <button className="ingrBtn1" onClick={() => addRemoveIngredient('remove', 'bacon')}>Less</button>
                    <button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'bacon')}>More</button>
                    
                </div>
               
                <div className="ingrBtns">
                    <p>Cheese:</p>
                    <button className="ingrBtn1" onClick={() => addRemoveIngredient('remove', 'cheese')}>Less</button>
                    <button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'cheese')}>More</button>
                    
                </div>
                
                <div className="ingrBtns">
                    <p>Meat:</p>
                    <button className="ingrBtn1" onClick={() => addRemoveIngredient('remove', 'meat')}>Less</button>
                    <button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'meat')}>More</button>
                    
                </div>
                
                <div className="signupButton">
                    
                   
                       <Button disabled={totalIngredientsCount === 0} variant="contained" color="primary" onClick={handleSignupClick}>
                            SIGN UP TO ORDER
                        </Button>
                    
                </div>
                
                </div>
                
            </div>
        </>
    );

}