import {motion} from "framer-motion"
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const TitleWihtText = () => {
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
                    duration: 1.5, ease: "easeInOut",
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({y: '20vw'});
        }
    }, [animation, inView]);
    return (
        <>

            <div ref={ref}
                 className='sm:h-full xl:h-96 justify-center w-full flex flex-col sm:pt-80 sm:pb-20 sm:pl-5 md:pl-6
                 xl:pt-0 xl:pb-0 xl:pl-0 xl:ml-44 2xl:ml-0'>

                <motion.div animate={animation} initial={{opacity: 0}} className='flex items-center'>
                    <h4 className='text-sm text-yellow font-semibold'>O NAS</h4>
                </motion.div>

                <motion.div animate={animation} initial={{opacity: 0}}
                            className='flex flex-col sm:items-center md:items-start'>
                    <h2 className='sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-sm pt-8 text-3xl font-semibold
                    text-trueGray900'>
                        Robimy wszystko,<br/> by nasi klienci działali sprawniej</h2>
                    <p className='sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-sm pt-8 text-base text-trueGray700'>
                        Rozwiązujemy największe wyzwanie od globalnych organizacji aż po małe firmy. Zatrudniamy każdego
                        w dowolnym miejscu zgodnie z przepisami.
                    </p>
                </motion.div>

            </div>
        </>
    );
}

export default TitleWihtText;
