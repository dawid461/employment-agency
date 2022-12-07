import Heading from './components/heading.js';
import ImageTablet from './components/image-tablet.js';
import Customer1 from './components/customer-1.js';
import Customer2 from './components/customer-2.js';
import Customer3 from './components/customer-3.js';
import {motion} from "framer-motion";
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const Customers = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    const animationLeft = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();

    useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                transition: {
                    duration: 1.2, delay: 0.2, ease: "easeInOut"
                },
                opacity: 1,
            });
            animation1.start({
                y: 0,
                transition: {
                    duration: 1.2, delay: 0.2, ease: "easeInOut"
                },
                opacity: 1,
            });
            animation2.start({
                y: 0,
                transition: {
                    duration: 1.2, delay: 0.4, ease: "easeInOut"
                },
                opacity: 1,
            });
            animation3.start({
                y: 0,
                transition: {
                    duration: 1.2, delay: 0.4, ease: "easeInOut"
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animationLeft.start({x: '-100vw'})
            animation1.start({y: '20vw'})
            animation2.start({y: '20vw'})
            animation3.start({y: '20vw'})
        }
    }, [animationLeft, animation1, animation2, animation3, inView]);
    return (
        <>
            <div ref={ref}
                 className='h-full flex sm:w-full sm:flex-col xl:w-9/12 xl:flex-row items-center max-w-screen-2xl'
                 id='klienci'>

                <div className='sm:flex md:flex lg:flex xl:hidden 2xl:hidden flex-col w-full bg-bgStatistics pb-20'>
                    <motion.div animate={animation1} initial={{opacity: 0}}>
                        <Heading/>
                    </motion.div>
                    <motion.div animate={animation2} initial={{opacity: 0}}
                                className='w-full flex flex-col items-center'>
                        <ImageTablet/>
                        <Customer1/>
                        <Customer2/>
                        <Customer3/>
                    </motion.div>
                </div>


                <div
                    className='w-full 2xl:flex xl:flex sm:hidden md:hidden lg:hidden flex-row items-start justify-around
                    pb-36'>
                    <motion.div animate={animationLeft} initial={{opacity: 0}}>
                        <Heading/>
                        <ImageTablet/>
                    </motion.div>
                    <div className='mt-12'>
                        <motion.div animate={animation1} initial={{opacity: 0}} className='flex justify-end'>
                            <Customer1/>
                        </motion.div>
                        <motion.div animate={animation2} initial={{opacity: 0}} className='flex justify-start'>
                            <Customer2/>
                        </motion.div>
                        <motion.div animate={animation3} initial={{opacity: 0}} className='flex justify-end'>
                            <Customer3/>
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Customers;