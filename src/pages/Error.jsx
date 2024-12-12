import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="grid place-items-center h-screen">
    <div className="text-center sp">
    <h2 className="text-2xl font-bold mb-4">404 Page Not Found</h2>            
    <Link className="btn btn-secondary" to={'/'}>Back Home</Link>
    </div>
        </div>
    );
};

export default Error;