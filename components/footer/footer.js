import Container1 from './components/container-1.js';
import Container2 from './components/container-2.js';
import Container3 from './components/container-3.js';
import Newsletter from './components/newsletter.js';
import Seperator from './components/seperator.js';
import Copyright from './components/copyright.js';

const Footer = () => {
    return (
        <>
            <div className='h-full w-full flex flex-col items-center bg-trueGray800 pt-20'>

                <div
                    className='xl:h-40 sm:w-full lg:w-11/12 xl:w-9/12 flex sm:flex-col xl:flex-row items-end
                    justify-center max-w-screen-2xl'>
                    <Container1/>
                    <Container2/>
                    <Container3/>
                    <Newsletter/>
                </div>

                <div
                    className='sm:w-full lg:w-11/12 xl:w-9/12 flex sm:flex-col xl:flex-row items-center justify-center
                    max-w-screen-2xl'>
                    <Seperator/>
                </div>

                <div
                    className='sm:w-full lg:w-11/12 xl:w-9/12 flex sm:flex-col xl:flex-row sm:items-start xl:items-center
                     max-w-screen-2xl sm:pb-2 xl:pb-20'>
                    <Copyright/>
                </div>
                <div>
                    <p className="text-xs text-center text-white sm:mt-8 xl:mt-16 pb-5">Made with ❤️ by <a
                        href='https://dinkystudio.pl/'
                        className='hover:text-yellow duration-300 delay-75'>dinkystudio.pl</a></p>
                </div>

            </div>
        </>
    );
}

export default Footer;