import React from 'react';
import "./Home.css";
import Product from"./Product";
function Home() {
  return (
    <div className="Home">
       <div className="Home_container">
        <img className="Home_image" src="./one-piece.gif" alt="shop" />
        <div className="Home_row">
            <Product title="Ittachi uchiha T-shirt" price={299} rating={5} image="./animeshirt6.webp" />
            <Product title="Ittachi uchiha T-shirt" price={299} rating={5} image="./animeshirt1.webp" />
        </div>
        <div className="Home_row">
        <Product title="Ittachi uchiha T-shirt" price={296} rating={5} image="./animeshirt2.webp" />
        <Product title="Ittachi uchiha T-shirt" price={299} rating={5} image="./animeshirt3.webp" />
        <Product title="Ittachi uchiha T-shirt" price={299} rating={5} image="./animeshirt4.webp" />
            
        </div>
        <div className="Home_row">
            <Product/>
            <Product/>
        </div>
       </div>    
    </div>
  )
}

export default Home;