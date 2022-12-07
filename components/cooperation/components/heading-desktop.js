import Image from 'next/image'
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const HeadingDesktop = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    ease: "easeInOut", duration: 1
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({x: '-10vw'})
        }
    }, [animation, inView]);
    return (
        <>
            <div ref={ref} className='w-full xl:flex 2xl:flex flex-col justify-start sm:hidden md:hidden lg:hidden'>
                <motion.div animate={animation} initial={{opacity: 0}} className='absolute pl-1'>
                    <Image src='/media/square-statistics.svg' alt='square.svg' width={145} height={167}/>
                </motion.div>
                <motion.div animate={animation} initial={{opacity: 0}}
                            className='flex flex-col items-start xl:pl-48 2xl:pl-64 pt-4'>
                    <h4 className='text-sm text-yellow font-semibold'>WSPÓŁPRACA</h4>
                    <h2 className='max-w-sm pt-8 text-3xl font-semibold text-trueGray800'>Jak wygląda współpraca <br/>z
                        nami?</h2>
                </motion.div>
            </div>
        </>
    );
}

export default HeadingDesktop;