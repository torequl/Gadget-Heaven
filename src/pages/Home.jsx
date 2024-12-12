import { Link, useLoaderData } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
const Home = () => {
    const categoryLoaded = useLoaderData()
    const { categories } = categoryLoaded;
    const [active, setActive] = useState('category')
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setAllProducts(data.products)
            })
    }, []);

    const handleCategory = (categoryName) => {
        if (categoryName == 'all') {
            setProducts(allProducts)
        }
        else {
            const myFilter = allProducts.filter(p => p.category == categoryName);
            setProducts(myFilter);
        }
    };
    

    return (
        <>
        <Helmet>
            <title>Home - Gadget Shop</title>
        </Helmet>
            <div className="hero bg-[#9538E2] pt-10 pb-56 w-11/12 mx-auto rounded-xl">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="text-xl py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='w-10/12 md:w-5/12 mx-auto -mt-44 backdrop-blur-lg border p-5 rounded-xl'>
                <img className='rounded-xl object-cover' src={bannerImg} alt="" />
            </div>

            <h2 className='font-bold text-center text-3xl my-12'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto gap-6'>
                <div className='col-span-1 md:col-span-2 flex flex-row flex-wrap md:flex-col gap-4'>
                    <h3 className='text-xl font-bold'>Categories ({categories.length})</h3>
                    <button onClick={() => {
                        handleCategory('all');
                        setActive('category');
                    }}
                        className={`btn ${active === 'category' ? 'active-one' : "rounded-full"
                            }`}>
                        All Categories
                    </button>
                    {
                        categories.map(category =>
                            <button
                                onClick={() => {
                                    handleCategory(category.name);
                                    setActive(category.name);
                                }}
                                key={category.id}
                                className={`btn ${active === category.name ? 'active-one' : "rounded-full"
                                    }`}>
                                {category.name}
                            </button>)
                    }
                </div>
                <div className='col-span-1 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        products.slice(0, 9).map(product =>
                            <div key={product.id} className='border p-4 bg-purple-100 rounded-md'>
                                <div className='h-[200px]'>
                                <img className='rounded-lg w-full object-cover bg-white h-[100%]' src={product.imgUrl} alt="" />
                                </div>
                                <h2 className='text-xl mt-4 font-bold'>{product.name}</h2>
                                <p>{product.category}</p>
                                <p className='text-lg text-blue-600 font-bold'>$ {product.price}</p>
                                <p>{product.rating}</p>
                                <Link to={`/product-details/${product.name}`} className='btn btn-outline rounded-full'>View Details</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;