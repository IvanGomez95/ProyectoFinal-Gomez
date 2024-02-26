import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel"
import ItemList from "./ItemList";
import {getFirestore, collection, query, where, addDoc, getDocs} from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {

    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {id} = useParams ();

    useEffect (() => {
    const db = getFirestore ();
    const itemsCollection = collection (db, "items");
    const consulta = id ? query (itemsCollection, where ("category", "==", id)) : itemsCollection;
    getDocs (consulta).then ( resultado => {
        setLoading (false);
        setItems (resultado.docs.map(producto => ({id:producto.id, ...producto.data ()})));
    }) 
   }, [id]);

    return(
       <>
            {id ? "" : <Carousel />}
            {loading ? <Loading /> : <ItemList items = {items}/>}
       </> 
    )
}

export default ItemListContainer;