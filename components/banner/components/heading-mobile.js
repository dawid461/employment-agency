import {motion} from "framer-motion";

const HeadingMobile = () => {
    return (
        <>
            <motion.div animate={{y: ['20vw', '0vw']}} transition={{ease: "easeInOut", duration: 1, delay: 0.2}}
                        className='w-80 pl-6 sm:flex md:flex lg:flex xl:hidden 2xl:hidden'>
                <h1 className='h-24 text-grayTitle text-5xl font-semibold pt-7 z-0'>Praca<br/>dla każdego!</h1>
            </motion.div>
        </>
    );
}
export default HeadingMobile;




