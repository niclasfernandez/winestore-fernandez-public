import './ItemListContainer.css'
import React from 'react';
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    return (
        <header className="App-header">
            <div className="main">
                <ItemList />
            </div>
        </header>
    )
}


export default ItemListContainer;