import Image from 'next/image'
import WhiteContainer from './white-container';

const BannerOffer = () => {
    return (
        <>
            <div className='w-full xl:hidden 2xl:hidden h-72 bg-banner-offer bg-no-repeat bg-left-top bg-scroll'>
                <WhiteContainer/>
            </div>
            <div className='sm:hidden md:hidden lg:hidden xl:flex 2xl:flex flex-col w-full h-80 items-end'>
                <div className='relative w-3/4 bottom-28'>
                    <Image src='/media/banner-offer.png' alt='banner-offer' width={1446} height={414}/>
                </div>
                <div className='absolute w-3/4'>
                    <WhiteContainer/>
                </div>
            </div>
        </>
    );
}

export default BannerOffer;