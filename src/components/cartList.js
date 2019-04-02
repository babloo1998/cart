import React, {Component} from 'react';
import Fruit from "./Fruit";
// import TodoInput from "./TodoInput";

class CartList extends Component {
    render() {
        const {fruits, minus, add, del}=this.props;
        return (
            <ul className="list-group my-3">
                {fruits.map(item=> {
                    return <Fruit
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        minus = {()=>minus(item.id)}
                        add = {()=>add(item.id)}
                        del = {()=>del(item.id)}
                    />
                })}
            </ul>
        );
    }
}

export default CartList;