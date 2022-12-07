import Image from 'next/image'
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const Card4 = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {duration: 0.8, delay: 0.2, ease: "easeInOut"},
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({
                y: '20vw',
            })

        }
    }, [animation, inView]);
    return (
        <>
            <div ref={ref} className='w-full flex sm:flex-col sm:items-center xl:flex-row xl:items-start
            xl:justify-center 2xl:items-center sm:mt-16 xl:mt-24'>
                <motion.div animate={animation} initial={{opacity: 0}} className='flex justify-center items-center
                w-14 h-14 bg-white rounded-sm'>
                    <span className='text-2xl text-yellow font-semibold'>04</span>
                </motion.div>
                <motion.div animate={animation} initial={{opacity: 0}} className='sm:pt-6 xl:pt-4 xl:pl-10'>
                    <h3 className='text-2xl font-semibold sm:text-center xl:text-left text-trueGray900'>Swoboda
                        działania</h3>
                    <p className='max-w-xs sm:text-center xl:text-left text-trueGray600 pt-6'>Uwolnimy Cię od obowiązków
                        kadrowo-płacowych: umowy, teczki pracownicze, badania itd.</p>
                </motion.div>
                <motion.div animate={animation} initial={{opacity: 0}} className='sm:pt-12 xl:pt-4 xl:pl-64'>
                    <Image src='/media/cop-image04.svg' alt='cop-image04.svg' width={230} height={147}/>
                </motion.div>
            </div>
        </>
    );
}

export default Card4;