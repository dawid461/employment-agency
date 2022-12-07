import Image from 'next/image';
import {motion} from "framer-motion";
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const Heading = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    const animationLeft = useAnimation();
    const animationDown = useAnimation();

    useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                transition: {
                    duration: 1, ease: "easeInOut"
                },
                opacity: 1,
            });
            animationDown.start({
                y: 0,
                transition: {
                    duration: 1, ease: "easeInOut"
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animationLeft.start({x: "-100vw"})
            animationDown.start({y: "20vw"})
        }
    }, [animationLeft, animationDown, inView]);
    return (
        <>

            {/*--Mobile-version---*/}
            <div ref={ref} className='w-full sm:flex md:flex lg:flex xl:hidden 2xl:hidden flex-col justify-start pl-5'>
                <motion.div animate={animationDown} initial={{opacity: 0}} className='flex flex-col'>
                    <h4 className='text-sm text-yellow font-semibold'>STATYSTYKI</h4>
                    <h2 className='sm:max-w-xs md:max-w-xl lg:max-w-3xl pt-8 text-3xl font-semibold text-trueGray800'>Rozwiązania
                        HR, które rozwijają się <br/>wraz z Twoją firmą</h2>
                </motion.div>
            </div>

            {/*--Desktop-version---*/}
            <div ref={ref}
                 className='w-full sm:hidden md:hidden lg:hidden xl:flex 2xl:flex flex-col justify-center pl-5'>
                <motion.div animate={animationLeft} initial={{opacity: 0}} className='flex flex-col'>
                    <div className='relative xl:pl-1 xl:left-36 2xl:pl-96 2xl:left-24'>
                        <h4 className='text-sm text-yellow font-semibold'>STATYSTYKI</h4>
                    </div>
                    <div className='relative xl:pl-1 xl:left-36 2xl:pl-96 2xl:left-24'>
                        <h2 className='w-72 pt-8 text-3xl font-semibold text-trueGray800'>Rozwiązania HR, które
                            rozwijają się <br/>wraz z Twoją firmą</h2>
                    </div>
                </motion.div>

                <motion.div animate={animationLeft} initial={{opacity: 0}}
                            className='h-96 relative xl:pl-0 xl:pt-96 xl:left-8 xl:top-40 2xl:pl-5 2xl:pt-96 2xl:left-96 2xl:top-32 z-10'>
                    <Image src='/media/square-statistics.svg' alt='square-statistics.svg' width={165} height={177}/>
                </motion.div>
            </div>

        </>
    );
}

export default Heading;