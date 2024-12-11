import { Link, useLoaderData } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
import { useEffect, useState } from 'react';
const Home = () => {
    const categoryLoaded = useLoaderData()
    const { categories } = categoryLoaded;
    const [active, setActive] = useState(null)
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
    
    products.map(p => p.imgUrl = 'https://dlcdnwebimgs.asus.com/gain/d664baf7-9e2d-4279-b99d-a149d0fc05f0/w800');


    return (
        <div>
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
            <div className='w-4/12 mx-auto -mt-44 backdrop-blur-lg border p-5 rounded-xl'>
                <img className='rounded-xl' src={bannerImg} alt="" />
            </div>

            <h2 className='font-bold text-center text-3xl my-12'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-12 w-11/12 mx-auto gap-6'>
                <div className='col-span-2 flex flex-col gap-4'>
                    <h3 className='text-xl font-bold'>Categories ({categories.length})</h3>
                    <Link onClick={() => {
                        handleCategory('all');
                        setActive('category');
                    }}
                        className={`btn ${active === 'category' ? 'active-one' : "rounded-full"
                            }`}>
                        All Categories
                    </Link>
                    {
                        categories.map(category =>
                            <Link
                                onClick={() => {
                                    handleCategory(category.name);
                                    setActive(category.name);
                                }}
                                key={category.id}
                                className={`btn ${active === category.name ? 'active-one' : "rounded-full"
                                    }`}>
                                {category.name}
                            </Link>)
                    }
                </div>
                <div className='col-span-10 grid grid-cols-3 gap-4'>
                    {
                        products.slice(0, 9).map(product =>
                            <div key={product.id} className='border p-4 bg-purple-100 rounded-md'>
                                <img className='rounded-lg' src={product.imgUrl} alt="" />
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
        </div>
    );
};

export default Home;