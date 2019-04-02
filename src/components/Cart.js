import React, { Component } from "react";
import AddFruit from "./AddFruit";
import Total from "./Total";
import CartList from "./cartList";
import uuid from "uuid";

const defaultState = {
  name: "",
  id: uuid(),
  price: 0,
  quantity: 0
};

class Cart extends Component {
  state = {
    fruits: [
      {
        name: "Mango",
        quantity: 1,
        price: 10,
        id: uuid()
      },
      {
        name: "Apple",
        quantity: 1,
        price: 15,
        id: uuid()
      },
      {
        name: "Orange",
        quantity: 1,
        price: 20,
        id: uuid()
      }
    ],
    ...defaultState
  };

  subtractItem = id => {
    const newItems = this.state.fruits.map(element => {
      if (element.id === id) {
        element.quantity = element.quantity - 1;
        console.log(typeof element.quantity);
        return element;
      }
      return element;
    });
    this.setState({
      fruits: newItems
    });
  };
  addItem = id => {
    const newItems = this.state.fruits.map(element => {
      if (element.id === id) {
        element.quantity = element.quantity + 1;
        return element;
      }
      return element;
    });
    this.setState({
      fruits: newItems
    });
  };
  deleteItem = id => {
    const newItems = this.state.fruits.filter(element => {
      if (element.id !== id) {
        return element;
      }
    });
    this.setState({
      fruits: newItems
    });
  };
  getTotal() {
    let total = this.state.fruits.reduce(
      (accumulator, element) => accumulator + element.price * element.quantity,
      0
    );
    return total;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newFruit = {
      id: uuid(),
      name: this.state.name,
      price: this.state.price,
      quantity: parseInt(this.state.quantity)
    };
    console.log(newFruit);

    const updatedFruit = [...this.state.fruits, newFruit];

    this.setState({
      fruits: updatedFruit,
      ...defaultState
    });
  };

  render() {
    console.log(this.state.fruits);
    return (
      <div className="Cart-view">
        <AddFruit
          name={this.state.name}
          price={this.state.price}
          quantity={this.state.quantity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className={"cart-view-Header"}>
          <div className="cart-view-header-child">Name</div>
          <div className="cart-view-header-child">Quantity</div>
          <div className="cart-view-header-child">Price</div>
          <div className="cart-view-header-child">Total</div>
          <div className="cart-view-header-child">Subtract</div>
          <div className="cart-view-header-child">Add</div>
          <div className="cart-view-header-child">Delete</div>
        </div>
        <CartList
          fruits={this.state.fruits}
          minus={this.subtractItem}
          add={this.addItem}
          del={this.deleteItem}
        />

        <Total total={this.getTotal()} />
      </div>
    );
  }
}

export default Cart;
