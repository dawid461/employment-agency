import MenuDesktop from './components/menu-desktop';
import Logo from './components/logo';
import Buttons from './components/buttons';
import MenuMobile from './components/menu-mobile';

const Navbar = () => {
    return (
        <>
            <div
                className='sm:hidden md:hidden lg:hidden xl:flex 2xl:flex h-10 flex flex-row w-full justify-center
                items-center mt-10 mb-5 max-w-screen-2xl'>
                <Logo/>
                <MenuDesktop/>
                <Buttons/>
            </div>

            <div
                className='sm:flex md:flex lg:flex xl:hidden 2xl:hidden h-1 flex-row w-full justify-center
                items-center mt-10 max-w-screen-2xl'>
                <Logo/>
                <MenuMobile/>
            </div>
        </>
    );
}

export default Navbar;
