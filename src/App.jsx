



import Header from "./components/Header"
import Create from "./components/Create"
import Products from "./components/Products"

const App = () => {

  

  return(
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:px-8 lg:py-12">
        <section aria-labelledby="add-product-title">
          <Create />
        </section>
        <section aria-labelledby="inventory-title">
          <Products />
        </section>
      </main>
    </div>
  )
}

export default App