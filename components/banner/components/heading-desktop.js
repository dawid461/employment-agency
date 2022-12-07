import {motion} from "framer-motion"

const HeadingDesktop = () => {
    return (
        <>
            <motion.div animate={{x: [-100, 100, 0]}} transition={{duration: 2, delay: 0.5}}
                        className='w-full ml-12 sm:hidden md:hidden lg:hidden xl:flex 2xl:flex'>
                <h1 className='h-52 text-grayTitle text-6xl font-semibold pt-7'>Praca<br/>dla każdego!</h1>
            </motion.div>
        </>
    );
}

export default HeadingDesktop;
