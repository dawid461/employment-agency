import Image from 'next/image';
import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const Offer1 = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    duration: 1, ease: "easeInOut"
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({y: '20vw'})
        }
    }, [animation, inView]);
    return (
        <>
            <div ref={ref} className='w-full flex flex-row items-start md:justify-center sm:mt-16 xl:mt-24'>
                <motion.div animate={animation} initial={{opacity: 0}}
                            className='flex justify-center items-center sm:w-12 sm:h-12 xl:w-14 xl:h-14 bg-yellow
                            rounded-sm mr-2 sm:mt-1 xl:mt-0'>
                    <Image src='/media/offer-icon-1.svg' alt='offer-icon' width={24} height={24}/>
                </motion.div>
                <motion.div animate={animation} initial={{opacity: 0}} className='flex flex-col'>
                    <h3 className='sm:w-64 xl:w-72 text-2xl font-semibold text-left text-trueGray900 sm:pl-2
                    md:pl-6'>Szeroki zakres rekrutacji</h3>
                    <p className='sm:w-64 md:w-80 lg:w-64 xl:w-72 text-left text-trueGray600 pt-6 sm:pl-2 md:pl-6'>
                        Zatrudniamy osoby z Polski, Ukrainy, Białorusi, Rosji, Mołdawii oraz Gruzji, a także z krajów
                        Azjatyckich.</p>
                </motion.div>
            </div>
        </>
    );
}

export default Offer1;