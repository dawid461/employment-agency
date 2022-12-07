import HeadingDesktop from './components/heading-desktop';
import HeadingMobile from './components/heading-mobile';
import DescriptionWithButtonForDesktop from './components/description-with-button-for-desktop';
import DescriptionWithButtonForMobile from './components/description-with-button-for-mobile';
import Testimontal from './components/Testimontal';

const Banner = () => {
    return (
        <>
            <div className='h-full flex w-full flex-col justify-center mt-10 max-w-screen-2xl'>

                <div className='w-full h-full bg-banner-image bg-scroll sm:bg-right xl:bg-right-top 2xl:bg-right
                 bg-no-repeat bg-cover sm:pt-48 xl:pt-0'>
                    <div className='h-full 2xl:flex xl:flex flex-col banner-gradient-2 xl:max-w-sm 2xl:max-w-md
                     xl:pt-20 xl:pb-12 2xl:pb-16 justify-center sm:hidden md:hidden lg:hidden'>
                        <HeadingDesktop/>
                        <DescriptionWithButtonForDesktop/>
                    </div>
                    <Testimontal/>
                    <HeadingMobile/>
                </div>
                <DescriptionWithButtonForMobile/>
            </div>

        </>
    );
}

export default Banner;
