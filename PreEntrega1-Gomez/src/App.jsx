import Carousel from "./Components/Carousel"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ItemListContainer from "./Components/ItemListContainer"
import Productos from "./Components/Productos"

function App() {

  return (
    <>
      <Header/>
      <ItemListContainer sitioEnMantenimiento={"🚨¡El sitio se encuentra actualmente en mantenimiento! Gracias por su paciencia.🚨"} />
      <Carousel />
      <Productos />
      <Footer />

    </>
  )
}
export default App
