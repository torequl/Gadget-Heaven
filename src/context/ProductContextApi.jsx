import { createContext, useState } from "react";
import { toast } from "react-toastify";


// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductContextApi = ({ children }) => {

    const [cartProduct, setCartProduct] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleWishlist = (product) => {
        const isExist = wishlist.find(p => p.id == product.id);
        if (isExist) {
            toast.error('Already added to the Wishlist')
        }
        else {
            const newCartItem = [...wishlist, product]
            setWishlist(newCartItem);
            toast.success(`${product.name} Added to the Wishlist`)
        }
    }

    const handleAddToCart = (product) => {
        const isExist = cartProduct.find(p => p.id == product.id);
        if (isExist) {
            toast.error('Already added to the cart')
        }
        else {
            const newCartItem = [...cartProduct, product]
            setCartProduct(newCartItem);
            toast.success(`${product.name} Added to the Cart`)
        }
    }


    const info = {
        handleAddToCart,
        handleWishlist,
        cartProduct,
        setCartProduct,
        wishlist,
        setWishlist
    }

    return (
        <ProductContext.Provider value={info}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextApi;