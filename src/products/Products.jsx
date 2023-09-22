/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
const {products} = useLoaderData()
 
    return (
        <div className="grid grid-cols-3 gap-5 m-2 p-5 ">
           {products.map((product , index)=><ProductsCard key={index} product={product}></ProductsCard>)}
            
        </div>
    );
};

export default Products;