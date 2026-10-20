
import {useState, useContext} from "react";
import {Button, Label, TextInput} from "flowbite-react";
import {ProductContext} from "../context/ProductContext"
const Create = () => {
    const {setProducts} = useContext(ProductContext)
    const[name, setName] = useState("") // used to track product name input
    const[qty, setQty] = useState("") // used to track product qty input
    const[error, setError] = useState("")

    function handleSubmit(event){
        event.preventDefault();

        const productName = name.trim();
        const quantity = Number(qty);
        if(!productName || qty === "" || !Number.isFinite(quantity) || quantity < 0){
            setError("Enter a product name and a valid quantity.");
            return;
        }

        setProducts(currentProducts => [...currentProducts, {
            name: productName,
            qty: quantity,
            id: Date.now()
        }]);
        setName("")
        setQty("")
        setError("")

    }

    return(
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-7">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Get started</p>
                <h1 id="add-product-title" className="text-2xl font-bold tracking-tight text-slate-950">Add a product</h1>
                <p className="mt-2 text-sm leading-6 text-slate-500">Keep your stock list up to date by adding a new item.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <Label htmlFor="product-name" value="Product name" className="mb-2 block" />
                    <TextInput
                        id="product-name"
                        type="text"
                        placeholder="e.g. Black Marker"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="product-quantity" value="Quantity" className="mb-2 block" />
                    <TextInput
                        id="product-quantity"
                        type="number"
                        placeholder="Enter stock quantity"
                        value={qty}
                        onChange={event => setQty(event.target.value)}
                        min="0"
                        step="1"
                        required
                    />
                </div>
                {error && <p role="alert" className="text-sm font-medium text-rose-600">{error}</p>}
                <Button type="submit" className="w-full">
                    <svg className="mr-2 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 4a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 10 4Z" />
                    </svg>
                    Add to inventory
                </Button>
            </form>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-indigo-50 p-4 text-sm leading-5 text-indigo-900">
                <svg className="mt-0.5 size-5 shrink-0 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8.75-3a.75.75 0 0 1 1.5 0v.1a.75.75 0 0 1-1.5 0V7Zm0 2.4a.75.75 0 0 1 1.5 0v3.6a.75.75 0 0 1-1.5 0V9.4Z" clipRule="evenodd" />
                </svg>
                <p>Product quantities can be updated any time by removing and adding the item again.</p>
            </div>
        </div>
    )
}
export default Create