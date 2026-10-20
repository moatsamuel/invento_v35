
import {useContext} from "react";
import {Badge, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";
import {ProductContext} from "../context/ProductContext"

const Products = () => {
    const {products, setProducts} = useContext(ProductContext)

    function handleDelete(id){
        setProducts(currentProducts => currentProducts.filter(product => product.id !== id))
    }

    return(
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
            <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Overview</p>
                <h2 id="inventory-title" className="text-xl font-bold tracking-tight text-slate-950">Product inventory</h2>
                <p className="mt-1 text-sm text-slate-500">A quick view of the items you currently have in stock.</p>
            </div>
            <Badge color="indigo" className="rounded-full px-2.5 py-1">
                {products.length} {products.length === 1 ? "item" : "items"}
            </Badge>
        </div>
        {products.length > 0 ? (
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell className="whitespace-nowrap bg-slate-50">Product</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap bg-slate-50">Quantity in stock</TableHeadCell>
                            <TableHeadCell className="bg-slate-50"><span className="sr-only">Actions</span></TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {products.map((product, index) => (
                            <TableRow key={product.id} className="bg-white">
                                <TableCell className="whitespace-nowrap font-medium text-slate-900">
                                    <span className="mr-3 inline-flex size-9 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {product.name}
                                </TableCell>
                                <TableCell>
                                    <Badge color={Number(product.qty) > 0 ? "success" : "failure"} className="w-fit rounded-full">
                                        {product.qty} {Number(product.qty) === 1 ? "unit" : "units"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button color="light" size="xs" onClick={() => handleDelete(product.id)} aria-label={`Remove ${product.name}`}>
                                        Remove
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        ) : (
            <div className="px-6 py-14 text-center sm:py-20">
                <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500" aria-hidden="true">
                    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
                    </svg>
                </span>
                <h3 className="text-base font-semibold text-slate-900">Your inventory is empty</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Add your first product using the form, and it will show up here.</p>
            </div>
        )}
    </div>
    )
}

export default Products