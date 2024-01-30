import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="col-md-4 text-center my-5">
            <div className="card">
                <Link className="text-decoration-none lead text-dark" to={"/item/" + item.id}>
                    <img className="card-img-top" src= {item.image} alt= {item.title} />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <a href="#" className="btn btnHover">Comprar</a>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Item;