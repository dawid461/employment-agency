import Image from 'next/image'

const BannerStatistics = () => {
    return (
        <>
            <div className='w-full sm:hidden md:flex lg:flex xl:flex 2xl:flex items-end flex-col md:mt-28 xl:mt-0'>
                <div className='md:w-full xl:w-11/12 2xl:w-full justify-end flex'>
                    <div className='relative md:bottom-1 xl:bottom-32 2xl:bottom-40 z-0'>
                        <Image src='/media/banner-statistics-desktop.png' alt='banner-statistics' width={1415}
                               height={461}/>
                    </div>
                </div>
            </div>

            <div className='sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden mt-28 justify-end'>
                <Image src='/media/banner-statistics-mobile.png' alt='banner-statistics' width={351} height={344}/>
            </div>
        </>
    );
}

export default BannerStatistics;