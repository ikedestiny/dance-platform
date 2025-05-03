import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [searchTag, setSearchTag] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTag) navigate(`/?tag=${searchTag}`);
    };

    return (
        <div className='flex  justify-center sticky text-orange-500'>
            <nav className="bg-gray-600 p-4 shadow-md rounded-2xl mt-10 w-[80%] items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className=" text-2xl font-bold">DanceVibes</Link>
                    <div className="flex space-x-4 items-center">
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                value={searchTag}
                                onChange={(e) => setSearchTag(e.target.value)}
                                placeholder="Search by tag..."
                                className="p-2 rounded-l-md focus:outline-none"
                            />
                            <button type="submit" className="bg-white  p-2 rounded-r-md">Search</button>
                        </form>
                        <Link to="/profile/1" className=" hover:text-gray-200">Profile</Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;