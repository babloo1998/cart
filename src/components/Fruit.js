import React, { Component } from "react";
import "../styles.css";

class Fruit extends Component {
  render() {
    const {name, quantity, price, minus, add, del} = this.props
    return (
      <div>
        <div className={"cart-view"}>
          <div className="cart-view-child">{name}</div>
          <div className="cart-view-child">{quantity}</div>
          <div className="cart-view-child">{price}</div>
          <div className="cart-view-child">
            {quantity * price}
          </div>
          <div
            className="cart-view-child static-view"
            onClick={minus}
          >
            -
          </div>
          <div
            className="cart-view-child static-view"
            onClick={add}
          >
            +
          </div>
          <div
            className="cart-view-child static-view"
            onClick={del}
          >
            Del
          </div>
        </div>
      </div>
    );
  }
}

export default Fruit;
