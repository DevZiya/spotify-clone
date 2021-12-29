import Auth from "./Navbar/Auth"
import Navigation from "./Navbar/Navigation"


const Navbar = () => {
    return (
        <div className='h-[3.75rem] flex items-center justify-between px-8 w-full'>
           <Navigation />
           <Auth />
        </div>
    )
}

export default Navbar
