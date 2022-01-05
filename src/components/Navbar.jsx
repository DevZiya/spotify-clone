import { useRouteMatch } from "react-router-dom/"
import Auth from "./Navbar/Auth"
import Navigation from "./Navbar/Navigation"
import Search from "./Navbar/Search"


const Navbar = () => {
    const sourceRoute = useRouteMatch('/search')

    return (
        <div className='h-[3.75rem] flex items-center justify-between px-8 w-full z-10'>
           <Navigation />
           {sourceRoute && <Search />}

           <Auth />
        </div>
    )
}

export default Navbar
