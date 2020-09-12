import React from "react";
import "./Home.css";
import Product from "./Product";
import uuid from "react-uuid";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.ibb.co/hXS9sJX/My-Post-2.png"
          alt="Welcome-To-Cindy-s-E-shop-Take-a-look-around"
        />

        <div className="home__row">
          <Product
            title="Paper Mario: The Origami King - Nintendo Switch"
            price={59.18}
            image="https://images-na.ssl-images-amazon.com/images/I/51FtS6p2XtL._AC_SY200_.jpg"
            rating={5}
            id={uuid()}
          />
          <Product
            title="$99 Nintendo eShop Gift Card [Digital Code]"
            price={99.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51x+YpqXTIL._AC_SY200_.jpg"
            rating={5}
            id={uuid()}
          />
          <Product
            title="Legend of Zelda Link's Awakening - Nintendo Switch"
            price={38.09}
            image="https://images-na.ssl-images-amazon.com/images/I/51yPmwP26mL._AC_SY200_.jpg"
            rating={3}
            id={uuid()}
          />
        </div>

        <div className="home__row">
          <Product
            title="Mario Kart 8 Deluxe - Nintendo Switch"
            price={49.98}
            image="https://images-na.ssl-images-amazon.com/images/I/515IAQsQGjL._AC_SY200_.jpg"
            rating={3}
            id={uuid()}
          />
          <Product
            title="Animal Crossing: New Horizons - Nintendo Switch"
            price={58.49}
            image="https://images-na.ssl-images-amazon.com/images/I/511zIZkX7CL._AC_SY200_.jpg"
            rating={5}
            id={uuid()}
          />
          <Product
            title="Ring Fit Adventure - Nintendo Switch"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL._AC_SY200_.jpg"
            rating={4}
            id={uuid()}
          />
          <Product
            title="Luigi's Mansion 3 - Nintendo Switch"
            price={42.4}
            image="https://images-na.ssl-images-amazon.com/images/I/51uaF35EeXL._AC_SY200_.jpg"
            rating={4}
            id={uuid()}
          />
        </div>

        <div className="home__row">
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
            price={359.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_SY200_.jpg"
            rating={5}
            id={uuid()}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
