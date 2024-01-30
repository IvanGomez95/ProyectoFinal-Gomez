const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 text-center">
                    <img src= {item.image} alt= {item.title} className="img-fluid" />
                </div>
                <div className="col-md-4 text-center">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2><b>${item.price}</b></h2>
                    <a href="#" className="btn btnHover">Comprar</a>
                </div>
            </div>
        /</div>
    )        
}
export default ItemDetail;