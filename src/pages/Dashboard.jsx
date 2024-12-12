import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContextApi";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const { cartProduct, setCartProduct, wishlist, setWishlist, handleAddToCart } = useContext(ProductContext)

    const [cartProducts, setCartProducts] = useState(cartProduct)

    const [wishProducts, setWishProducts] = useState(wishlist)

    cartProduct.map(p => p.imgUrl = 'https://dlcdnwebimgs.asus.com/gain/d664baf7-9e2d-4279-b99d-a149d0fc05f0/w800');

    // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = cartProduct.reduce((total, item) => total + item.price, 0);

    const handleCartRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            const newCart = cartProducts.filter(p => p.id !== id);
            setCartProducts(newCart)
            setCartProduct(newCart);
        }
    }
    const handleWishRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            const newCart = wishProducts.filter(p => p.id !== id);
            setWishProducts(newCart)
            setWishlist(newCart);
        }
    }

    const wishAddToCart = (id) => {
        const newCart = wishProducts.find(p => p.id == id);
        handleAddToCart(newCart)
        const newCartItem = [...cartProducts, newCart];
        setCartProducts(newCartItem)
    }

    const sortByPrice = () => {
        const sortProduct = cartProducts.sort((a, b) => b.price - a.price);
        const sortNewProduct = [...sortProduct]
        setCartProducts(sortNewProduct)
    }

    const navigate = useNavigate()

    const handlePurchase = () => {
        if (cartProduct.length > 0) {
            setCartProducts([]);
            setCartProduct([]);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment successful!",
                text: `Total $ ${totalPrice.toFixed(2)}`,
                showConfirmButton: true,
            }, navigate('/'));
        }
        else {
            alert("Cart is empty!");
        }
    }


    return (
        <>
        <Helmet>
            <title>Dashboard - Gadget Shop</title>
        </Helmet>
            <div className="py-10 bg-theme px-6 md:px-80">
                <h2 className="text-4xl text-white font-bold text-center">Product Details</h2>
                <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                    <button onClick={() => setIsActive(!isActive)}
                        className={`${isActive ? 'active-btn' : 'no-active'}`}>Cart</button>
                    <button onClick={() => setIsActive(!isActive)}
                        className={`${isActive ? 'no-active' : 'active-btn'}`}>Wishlist</button>
                </div>
            </div>
            
            <div className="w-11/12 mx-auto">
                {
                    isActive ?
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center mt-10">
                                <h3 className="font-bold text-2xl">Cart ({cartProduct.length})</h3>
                                <div className="flex flex-col md:flex-row md:col-span-11 items-center justify-center gap-6">
                                    <h3 className="font-bold text-2xl">Total Price ${totalPrice.toFixed(2)}</h3>
                                    <div className="flex-row flex items-center justify-center gap-4">
                                        <button
                                            onClick={sortByPrice}
                                            className="btn btn-sort">Sort by Price</button>
                                        <button
                                            onClick={handlePurchase}
                                            className="btn btn-purchase">Purchase</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-10/12 mx-auto mt-10 gap-5">
                                <div className="space-y-4">
                                    {
                                        cartProducts.map(p => <div className="border rounded-lg grid grid-cols-12 items-center gap-5" key={p.id}>
                                            <div className="col-span-4 md:col-span-2">
                                                <img src={p.imgUrl} alt="" />
                                            </div>
                                            <div className="col-span-6 md:col-span-9 space-y-2">
                                                <h3 className="text-base md:text-2xl font-bold">{p.name}</h3>
                                                <p className="text-base">{p.description}</p>
                                                <h3 className="text-base md:text-xl font-bold">Price $ {p.price}</h3>
                                            </div>
                                            <div className="col-span-2 md:col-span-1">
                                                <span
                                                    onClick={() => handleCartRemove(p.id)}
                                                    className="text-2xl text-red-600 cursor-pointer"><RiDeleteBin2Line /></span>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-10">
                                <h3 className="font-bold text-2xl">Wishlist ({wishProducts.length})</h3>
                            </div>

                            <div className="w-full md:w-10/12 mx-auto mt-10 gap-5">
                                <div className="space-y-4">
                                    {
                                        wishProducts.map(p => <div className="border rounded-lg py-4 grid grid-cols-12 items-center gap-5" key={p.id}>
                                            <div className="col-span-2">
                                                <img src={p.imgUrl} alt="" />
                                            </div>
                                            <div className="col-span-9 space-y-2">
                                                <h3 className="text-2xl font-bold">{p.name}</h3>
                                                <p className="text-base">{p.description}</p>
                                                <h3 className="text-xl font-bold">Price $ {p.price}</h3>
                                                <button
                                                    onClick={() => wishAddToCart(p.id)}
                                                    className="btn bg-theme text-white rounded-full">Add to Cart</button>
                                            </div>
                                            <div className="col-span-1">
                                                <span
                                                    onClick={() => handleWishRemove(p.id)}
                                                    className="text-2xl cursor-pointer"><RiDeleteBin2Line /></span>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    );
};

export default Dashboard;