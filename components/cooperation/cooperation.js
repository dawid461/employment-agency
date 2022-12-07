import HeadingMobile from "./components/heading-mobile";
import HeadingDesktop from "./components/heading-desktop.js";
import Card1 from "./components/card-1";
import Card2 from "./components/card-2";
import Card3 from "./components/card-3";
import Card4 from "./components/card-4";
import WhiteContainer from "./components/white-container";

const Cooperation = () => {
    return (
        <>
            <div className='h-full flex w-full flex-col items-center sm:mt-20 xl:mt-64 sm:pl-0 sm:pt-0 sm:pb-24 md:pl-5
            md:pt-10 md:pb-24 lg:pl-5 lg:pt-10 xl:pl-5 xl:pt-0 xl:pb-60 bg-bgCooperation' id='wspolpraca'>
                <WhiteContainer/>
                <div className='h-full flex w-full flex-col items-center max-w-screen-2xl'>
                    <HeadingDesktop/>
                    <HeadingMobile/>
                    <div className="flex sm:w-full xl:w-11/12 flex-col">
                        <Card1/>
                        <Card2/>
                        <Card3/>
                        <Card4/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cooperation;