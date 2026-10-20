
import {createContext, useState} from "react"

// step1.  create context
export const ProductContext = createContext();
// create a provider for ProductContext: it will provide the product state
export const ProductsProvider = ({children}) => {

    // fetch the list of products from local storage, if true convert it from json and   if no product is there fetch empty array
    const productsList = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

const[products, setProducts] = useState(productsList);

    return (
        <ProductContext.Provider   value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}





export const ThemeContext = createContext("light");



// step: create a provider