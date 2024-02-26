import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext (CartContext);
    
    const onAdd = (quantity) => {
        addItem (item, quantity);
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 texto-justificado">
                    <img src= {item.image} alt= {item.title} className="img-fluid" />
                </div>
                <div className="col-md-4 me-4">
                    <h1 className="text-center">{item.title}</h1>
                    <p className="texto-justificado">{item.description}</p>
                    <h2 className="text-center"><b>${item.price}</b></h2>
                </div>    

                <div className="col align-self-center justify-content-center">
                    <ItemCount stock = {item.stock} onAdd={onAdd} />
                </div>
    
            </div>
        /</div>
    )        
}
export default ItemDetail;