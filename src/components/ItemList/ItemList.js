import './ItemList.css'
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item'
import { useParams } from "react-router-dom";
import Lottie from 'react-lottie';
import wine from '../lotties/wine.json';
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wine,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


const ItemList = () => {

    const {categoryId} = useParams()
    // Render with setTimeout
    const [vinosTime, setVinosTime] = useState([])

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categoryId === undefined) {
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                if(querySnapshot.size ===0) {
                    console.log('No Results!');
                }
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setVinosTime(products);
            }).catch((error) => {
                console.log('Error seraching items', error)
            }).finally(() => {
                setLoading(false);
            })
        } else {
            getDocs(query(collection(db, 'items'), where('category', '==',categoryId))).then((querySnapshot) => {
                if(querySnapshot.size ===0) {
                    console.log('No Results!');
                }
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setVinosTime(products);
            }).catch((error) => {
                console.log('Error seraching items', error)
            }).finally(() => {
                setLoading(false);
            })

        }
    }, [categoryId])

    return ( 
        <div className="allWines" >
            {loading && <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                loading={loading}
            />}
            {vinosTime.map(vino => <Item key={vino.id} product={vino}/>)}
        </div>
    )
}

export default ItemList;