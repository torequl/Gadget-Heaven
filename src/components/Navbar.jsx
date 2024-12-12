import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContextApi";

const Navbar = () => {

    const {cartProduct, wishlist} = useContext(ProductContext)

    const { pathname } = useLocation();

    const navLink = <>
        <Link to='/'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/dashboard'>Dashboard</Link>
    </>


    return (
        <div>
            <div className={`navbar w-11/12 mx-auto ${pathname == '/' ? 'bg-theme text-white -mb-4 mt-4 rounded-lg' : 'bg-base-100'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-theme border text-white rounded-lg z-[1] mt-3 w-52 p-2 shadow gap-4 text-lg">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-lg">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link to='/dashboard' className="text-2xl relative bg-white border text-black p-2 rounded-full">
                        <BsCart2 />
                        <span className="absolute text-sm right-0 -top-2">{cartProduct.length}</span>
                    </Link>
                    <Link to='/dashboard' className="text-2xl relative bg-white border text-black p-2 rounded-full">
                        <CiHeart />
                        <span className="absolute text-sm right-0 -top-2">{wishlist.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;