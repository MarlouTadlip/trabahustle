import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#418B5B] text-white h-28">
            <div className="flex items-center">
                <img src="src/assets/Icon.png" alt="Logo" className="h-8 w-8 mr-2" />
                <NavLink to="/"><span className="text-xl font-bold">TRABAHUSTLE</span></NavLink>
            </div>

            <div className="flex space-x-16">
                <NavLink to="/find-freelancers" className="hover:text-gray-400">Find Freelancers</NavLink>
                <NavLink to="/find-work" className="hover:text-gray-400">Find Work</NavLink>
                <NavLink to="/explore" className="hover:text-gray-400">Explore</NavLink>
                <NavLink to="/help-center" className="hover:text-gray-400">Help Center</NavLink>
            </div>

            <div className="flex space-x-10">
                <div className=" bg-white rounded-lg p-2">
                    <NavLink to="/login" className="hover:text-gray-400 text-black w-full">Login</NavLink>
                </div>
                <div className="bg-[#418B71] rounded-lg p-2">
                    <NavLink to="/signup" className="hover:text-gray-400">Sign Up</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;