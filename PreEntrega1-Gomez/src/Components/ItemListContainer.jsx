const ItemListContainer = ({sitioEnMantenimiento}) => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col md-12">
                    <div className="fw-bolder alert alert-danger text-center lead animate__animated animate__pulse animate__infinite	infinite" role="alert">{sitioEnMantenimiento}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;