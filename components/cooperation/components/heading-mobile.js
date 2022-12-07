import Image from 'next/image'
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const Heading = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationLeft = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    ease: "easeInOut", duration: 0.8
                },
                opacity: 1,
            });
            animationLeft.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 0.8
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({y: '10vw'})
            animationLeft.start({x: '-100vw'})
        }
    }, [animation, animationLeft, inView]);
    return (
        <>
            <div ref={ref} className='w-full sm:flex md:flex lg:flex flex-col justify-start pl-5 xl:hidden 2xl:hidden'>
                <motion.div animate={animationLeft} initial={{opacity: 0}}
                            className='relative sm:pl-60 sm:bottom-7 md:pl-2 md:bottom-16'>
                    <Image src='/media/square.svg' alt='square.svg' width={100} height={100}/>
                </motion.div>
                <motion.div animate={animation} initial={{opacity: 0}} className='flex flex-col'>
                    <h4 className='text-sm text-yellow font-semibold'>WSPÓŁPRACA</h4>
                    <h2 className='sm:max-w-xs md:max-w-xl lg:max-w-3xl pt-8 text-3xl font-semibold text-trueGray800'>Jak
                        wygląda współpraca <br/>z nami?</h2>
                </motion.div>
            </div>
        </>
    );
}

export default Heading;