import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <div
                className='sm:w-full xl:w-2/12 flex items-center  sm:justify-start xl:justify-center sm:ml-5 md:ml-10
                xl:ml-0 xl:ml-16'>
                <a href="https://www.gregbud-wykonawstwo.pl/" className="xl:cursor-pointer"><Image
                    src='/media/gregbud-logo.svg' alt='logo' width={150} height={48}/></a>
            </div>
        </>
    );
}

export default Logo;