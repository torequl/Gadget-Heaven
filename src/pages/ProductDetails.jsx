import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLoaderData, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContextApi";
import { Helmet } from "react-helmet";
import ScrollToTop from "../components/ScrollToTop ";

const ProductDetails = () => {
    const { handleAddToCart, handleWishlist } = useContext(ProductContext);
    const { id } = useParams()
    const productLoaded = useLoaderData()
    const { products } = productLoaded;
    const product = products.find(p => p.name === id)
    const { name, price, imgUrl, category, rating, description, specifications } = product;


    return (
        <>
        <ScrollToTop/>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <div className="pt-8 h-theme bg-theme px-6 md:px-80">
                <h2 className="text-4xl text-white font-bold text-center">Product Details</h2>
                <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>


            <div className="max-w-4xl w-11/12 -mt-20 md:-mt-52 mx-auto p-6 bg-white rounded-lg border">
                {/* Product Image */}
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-200 rounded-lg">
                        <img src={imgUrl} alt="" />
                    </div>

                    {/* Product Information */}
                    <div className="w-full md:w-1/2 md:ml-8 mt-6 md:mt-0">
                        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                        <p className="text-lg font-semibold text-gray-600 mt-2">Price: <span className="text-gray-800">$ {price}</span></p>

                        {/* Stock Status */}
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">{category}</span>
                        </div>

                        {/* Product Description */}
                        <p className="text-gray-600 mt-4">
                            {description}
                        </p>

                        {/* Specifications */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Specification:</h2>
                            <ul className="list-decimal ml-6 mt-2 text-gray-600">
                                {specifications.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mt-4">
                            <span className="font-semibold text-gray-800 mr-2">Rating:</span>
                            <div className="flex items-center space-x-1">
                                <span className="text-yellow-400 text-sm font-medium">{rating}</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex items-center space-x-4">
                            <button onClick={() => handleAddToCart(product)} className="btn btn-primary flex-1">
                                <span className="mr-2">Add To Cart</span>
                                <BsCartPlus className="text-2xl" />
                            </button>
                            <button onClick={() => handleWishlist(product)} className="btn btn-outline btn-secondary flex items-center">
                                <IoMdHeartEmpty className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;