
// header components needs products and it does not want it via prop drilling, it will consume it from Products context  
// import the context
import {ProductContext} from "../context/ProductContext"
// import the hook: useContext()
import {useContext, useEffect} from "react"
// destructure want you want to use from inside the context

const Header = () => {
    
    const {products} = useContext(ProductContext) // pulling out products from the context

    // anytime products state changes (a product is added or deleted) we want to store it inside localStorage
    useEffect( 
      function(){ 

        localStorage.setItem("products",  JSON.stringify(products))

     },  [products]  
    ) 
    
    return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-chalk/90 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <a href="#" className="text-xl font-extrabold text-leaf">Invento <span className="bg-amber-500 text-white p-1 rounded-xl"> App </span></a>
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li><a href="#categories" className="hover:text-leaf">Products Count: <span> {products.length}</span></a></li>
      </ul>
    </nav>
  </header>
    )
}

export default Header