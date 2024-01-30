import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ItemListContainer from "./Components/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path = {"/"} element = {<ItemListContainer />} />
        <Route path = {"/category/:id"} element = {<ItemListContainer />} />
        <Route path = {"/item/:id"} element = {<ItemDetailContainer />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  )
}
export default App
