import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MealDb from "./MealDb"
import {ProductsProvider} from "./context/ProductContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>

    {/* <MealDb /> */}
  </StrictMode>,
)
