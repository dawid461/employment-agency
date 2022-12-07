import {motion} from "framer-motion"

const DescriptionWithButtonForDesktop = () => {
    return (
        <>
            <motion.div animate={{x: [-100, 100, 0]}} transition={{duration: 2, delay: 0.5}}
                        className='w-full flex-col justify-start sm:hidden md:hidden lg:hidden xl:flex 2xl:flex'>
                <div className='flex w-full ml-12'>
                    <p className='text-base text-trueGray700'>Jesteśmy pionierem rekrutacji!<br/> Mamy ponad <span
                        className='font-semibold'>1500 obsadzonych</span> wykwalifikowanych<br/> pracowników, w
                        ponad<span className='font-semibold'> 90 firmach.</span></p>
                </div>

                <div className='flex w-full ml-12'>
                    <a className='flex w-52 h-14 mt-8 mb-12 justify-center items-center text-base text-Gray800
                    font-semibold border-solid border-2 border-yellow bg-yellow rounded-md cursor-pointer
                    hover:text-black hover:bg-white hover:border-black transition duration-300 transform
                    hover:-translate-y-1 hover:scale-100'
                       href='#o-nas'>Rekrutuj z nami</a>
                </div>
            </motion.div>
        </>
    );
}

export default DescriptionWithButtonForDesktop;