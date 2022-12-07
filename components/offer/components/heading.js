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

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    duration: 1, ease: "easeInOut"
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({x: '-100vw'})
        }
    }, [animation, inView]);
    return (
        <>
            <div ref={ref} className='w-full h-16 flex justify-start'>
                <motion.div animate={animation} initial={{opacity: 0}}
                            className='flex flex-col sm:pl-0 xl:pl-36 2xl:pl-72'>
                    <h4 className='text-sm pt-4 text-yellow font-semibold'>NASZE USŁUGI</h4>
                    <h2 className='sm:max-w-xs md:max-w-xw lg:max-w-xs xl:max-w-xs 2xl:max-w-xs pt-8 text-3xl
                    font-semibold text-trueGray900'>Świadczymy
                        usługę outsourcingu HR</h2>
                </motion.div>
            </div>
        </>
    );
}

export default Heading;