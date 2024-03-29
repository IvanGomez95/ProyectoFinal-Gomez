import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ItemListContainer from "./Components/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import CartContextProvider from "./Components/Context/CartContext"
import Cart from "./Components/Cart"
import Error404 from "./Components/Error404"
import Checkout from "./Components/Checkout"

function App() {

  return (
    <CartContextProvider >
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path = {"/"} element = {<ItemListContainer />} />
          <Route path = {"/category/:id"} element = {<ItemListContainer />} />
          <Route path = {"/item/:id"} element = {<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </CartContextProvider>  
  )
}
export default App
