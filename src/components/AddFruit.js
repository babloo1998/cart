import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AddFruit extends Component {
  render() {
    const { name, price, quantity, handleChange, handleSubmit } = this.props;
    return (
      <div className={"my-4 card card-body"}>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={handleChange}
            />
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              className="form-control"
              value={quantity}
              onChange={handleChange}
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="form-control"
              value={price}
              onChange={handleChange}
            />
            <button className="btn btn-info" type="submit">
              Add to cart
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFruit;
