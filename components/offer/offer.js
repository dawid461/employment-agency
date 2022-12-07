import Heading from './components/heading.js';
import Offer1 from './components/offer-1.js';
import Offer2 from "./components/offer-2.js";
import Offer3 from "./components/offer-3.js";
import Offer4 from "./components/offer-4.js";

const Offer = () => {
    return (
        <>
            <div className='h-full flex w-full flex-col items-center sm:pl-5 sm:pb-28 xl:pl-0 xl:pb-28 max-w-screen-2xl'
                 id='oferta'>
                <Heading/>
                {/*mobile-version*/}
                <div className="w-full sm:flex md:flex flex-col lg:hidden xl:hidden 2xl:hidden mt-12">
                    <Offer1/>
                    <Offer2/>
                    <Offer3/>
                    <Offer4/>
                </div>
                {/*tablet-1024px-and-desktop-version*/}
                <div className="lg:w-full xl:w-11/12 lg:flex xl:flex 2xl:flex flex-row sm:hidden md:hidden mt-12">
                    <Offer1/>
                    <Offer2/>
                </div>
                <div
                    className="lg:w-full xl:w-11/12 lg:flex xl:flex 2xl:flex flex-row sm:hidden md:hidden lg:mt-1
                     xl:mt-0">
                    <Offer3/>
                    <Offer4/>
                </div>
            </div>
        </>
    );
}

export default Offer;