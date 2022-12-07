import React from "react";
import {motion} from "framer-motion";
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const LoadInView = ({children}) => {
    const [ref, inView] = useInView({triggerOnce: true});
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    ease: "easeInOut", duration: 1.2, delay: 0.2
                },
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({y: '20vw'})
        }
    }, [animation, inView]);
    return (
        <div ref={ref}>
            {inView ? (
                <motion.div animate={animation} initial={{opacity: 0}}>
                    {children}
                </motion.div>
            ) : (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

export default LoadInView;
