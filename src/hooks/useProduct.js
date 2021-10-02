import { useEffect } from "react"
import { useState } from "react"
import useCart from "./useCart"

const useProduct = () =>{
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
// return necessary things 
    return [product, setProduct];
}

export default useProduct;