import Image from 'next/image'
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const PhotosMobile = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation1.start({
                x: 0,
                transition: {
                    duration: 2, ease: "easeInOut"
                }
            });

            animation2.start({
                x: 0,
                transition: {
                    duration: 2, delay: 0.2, ease: "easeInOut"
                }
            });

            animation3.start({
                x: 0,
                transition: {
                    duration: 2, delay: 0.4, ease: "easeInOut"
                }
            });

            animation4.start({
                x: 0,
                transition: {
                    duration: 2, delay: 0.5, ease: "easeInOut"
                }
            });

            animation5.start({
                x: 0,
                transition: {
                    duration: 2, delay: 0.6, ease: "easeInOut"
                }
            });
        }
        if (!inView) {
            animation1.start({x: '-100vw'})
            animation2.start({x: '-100vw'})
            animation3.start({x: '-100vw'})
            animation4.start({x: '-100vw'})
            animation5.start({x: '-100vw'})
        }
    }, [animation1, animation2, animation3, animation4, animation5, inView]);
    return (
        <>
            <div ref={ref} className='w-full flex flex-col'>
                <div className='w-full sm:relative md:relative lg:relative xl:hidden 2xl:hidden  '>
                    <motion.div animate={animation1} className='absolute sm:left-8 md:left-72 lg:left-96 z-10'>
                        <Image src='/media/about-us-1.png' alt='about-us-1' width={267} height={213}/>
                    </motion.div>

                    <motion.div animate={animation2}
                                className='absolute sm:left-1 sm:top-32 md:left-60 md:top-32 lg:left-80 lg:top-32 z-30'>
                        <Image src='/media/about-us-2.png' alt='about-us-2' width={157} height={154}/>
                    </motion.div>

                    <motion.div animate={animation3}
                                className='absolute sm:left-52 sm:top-20 md:left-96 md:pl-20 md:top-24 lg:left-96
                                lg:pl-40 lg:top-20 z-30'>
                        <Image src='/media/about-us-3.png' alt='about-us-3' width={146} height={144}/>
                    </motion.div>
                    <motion.div animate={animation4}
                                className='sm:w-60 sm:h-20 lg:w-72 lg:h-20 absolute sm:left-4 sm:top-10 md:left-64
                                md:top-10 lg:left-80 lg:top-18 border-1 border-yellow border-solid rounded-md z-20 '/>
                    <motion.div animate={animation5}
                                className='sm:w-40 sm:h-16 md:w-52 lg:w-60 absolute sm:left-32 sm:top-40 md:left-80
                                 md:top-40 lg:left-96 lg:top-40 border-1 border-yellow border-solid rounded-md z-0 '/>
                </div>
            </div>
        </>
    );
}

export default PhotosMobile;
