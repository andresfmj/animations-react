import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
    state = {
        items: [
            {id: 100, number: 1},
            {id: 101, number: 2},
            {id: 102, number: 3},
            {id: 103, number: 4},
        ]
    }

    addItemHandler = () => {
        const newItems = [...this.state.items]
        const lastItemFound = newItems[newItems.length-1]
        newItems.push({
            id: lastItemFound ? lastItemFound.id + 1 : 100,
            number: lastItemFound ? lastItemFound.number + 1 : 1
        })

        this.setState({items: newItems})

    }

    removeItemHandler = (selItem) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => item.id !== selItem)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition key={item.id} timeout={300} classNames='fade'>
                <li 
                    className="ListItem" 
                    onClick={() => this.removeItemHandler(item.id)}>{item.number}</li>
            </CSSTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup component='ul' className='List'>
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;