
import { LogOut, Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuthUser } from '../store/authUser.js'
import { useContentStore } from '../store/content.js'

const Navbar = () => {

    const {user,logout} = useAuthUser();

    const [ismobilemenuOpen,setIsmobilemenuOpen] = useState("false");

    const {contentType,setContent} = useContentStore();
    
    console.log("contentType",contentType);
     const toggleMobileMenu = () => {
        setIsmobilemenuOpen(!ismobilemenuOpen);
     }
     
     if (user && user.image) {
        console.log(user.image);
    } else {
        console.log("No image URL found for user");
    }

  return <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 " >
    <div  className="flex items-center gap-10 z-50">
        <Link to="/" >
        <img src="/netflix-logo.png" alt="Netflix logo" className='w-32 sm:w-40' />
        </Link>
    
    {/* desktop nav items */}
    <div className='hidden sm:flex gap-2 items-center'>
        <Link to="/" className='hover:underline' onClick={() => setContent("movies")}>
        Movies
        </Link>
        <Link to="/" className='hover:underline' onClick={() => setContent("tv")}>
        Tv Shows
        </Link>
        <Link to="/history" className='hover:underline' >
        Search History
        </Link>
    </div>
    </div>

    <div className='flex items-center gap-2 z-50'>
        <Link to={"/search"} >
        <Search className='size-6 cursor-pointer'/>
        </Link>
        <img src={user.image} alt="Avatar" className='h-8 rounded cursor-pointer' />
        <LogOut className='size-6 cursor-pointer' onClick={logout}/>

        <div className='sm:hidden'>
            <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu}/>
        </div>
    </div>



    {/* mobile nav items */}

    {ismobilemenuOpen && (
        <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
            <Link to={'/'} 
            className='block hover:underline p-2'
            onClick={toggleMobileMenu}
            >
                Movies
            </Link>

            <Link to={'/'} 
            className='block hover:underline p-2'
            onClick={toggleMobileMenu}
            >
                Tv Shows
            </Link>

            <Link to={'/history'} 
            className='block hover:underline p-2'
            onClick={toggleMobileMenu}
            >
                Search History
            </Link>
        </div>
    )}

  </header>
}

export default Navbar