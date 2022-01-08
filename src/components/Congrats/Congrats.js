import React, {useEffect} from "react";
import './Congrats.css'
import { useSearchParams } from "react-router-dom";
import { getDoc, doc, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

export default function Congrats() {

    let [searchParams] = useSearchParams();
    const orderId = searchParams.get("external_reference");

    useEffect(() => { 
        const batch = writeBatch(db)

        getDoc(doc(db, 'orders', orderId)).then((order) => {
            for (let i=0; i<order.data().items.length; i++){
                const itemDoc = doc(db, "items", order.data().items[i].id)
                if (order.data().items[0].itemCount <= order.data().items[i].stock) {
                    batch.update(itemDoc, { stock: (order.data().items[i].stock - order.data().items[i].itemCount)})
                }  
            }
            batch.commit()
            
          }).catch((error) => {
            console.log('Error searching items', error) 
        }).finally(() => {
        })
    }, [orderId])

    return (
                <div className="congratsContainer">
            <h1>
                Gracias por su compra!
            </h1>
            <iframe title="memeeee" src="https://giphy.com/embed/E3L5goMMSoAAo" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <h1>
                Su código de seguimiento es: {searchParams.get("external_reference")}
            </h1>
        </div>
    )
}