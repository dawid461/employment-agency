import Image from 'next/image'
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const PhotosDesktop = () => {

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
                    ease: "easeInOut", duration: 2, bounce: 0.3
                }
            });

            animation2.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 2, delay: 0.2, bounce: 0.3
                }
            });

            animation3.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 2, delay: 0.4, bounce: 0.3
                }
            });

            animation4.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 2, delay: 0.6, bounce: 0.3
                }
            });

            animation5.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 2, delay: 0.7, bounce: 0.3
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
            <div ref={ref} className='sm:hidden md:hidden lg:hidden xl:flex 2xl:flex flex-col xl:mr-20 2xl:mr-5'>
                <motion.div animate={animation1} className='absolute z-10 image-01-photos'>
                    <Image src='/media/about-us-4.png' alt='about-us-1' width={504} height={402}/>
                </motion.div>

                <motion.div animate={animation2} className='absolute z-30 image-02-photos'>
                    <Image src='/media/about-us-5.png' alt='about-us-2' width={326} height={288}/>
                </motion.div>

                <motion.div animate={animation3} className='absolute z-30 image-03-photos'>
                    <Image src='/media/about-us-6.png' alt='about-us-3' width={396} height={344}/>
                </motion.div>
                <motion.div animate={animation4}
                            className='absolute border-photos-desktop border-1 border-yellow border-solid
                            rounded-md z-20'/>
                <motion.div animate={animation5}
                            className='absolute w-96 h-10 mt-96 ml-48 border-1 border-yellow border-solid
                            rounded-md z-0 '/>
            </div>
        </>
    );
}

export default PhotosDesktop;
