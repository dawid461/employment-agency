import Faq from "react-faq-component";
import {motion} from "framer-motion";
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

const FaqList = () => {
    const data = {
        title: <h2>Najczęściej zadawane pytania</h2>,
        rows: [
            {
                title: <h4 className='text-xl'>Jak wysłać CV?</h4>,
                content: 'Cv możesz wysłać poprzez formularz  pod przyciskiem ,,Aplikuj” w górnej części strony  lub ' +
                    'przesłać go nam na maila podanego w zakładce ,,Kontakt”.',
            },
            {
                title: <h4 className='text-xl'>W jakich godzinach pracujemy?</h4>,
                content: 'Pracujemy od poniedziałku do piątku w godz od 8-16.',
            },
            {
                title: <h4 className='text-xl'>Jak szybko moge uzyskać zatrudnienie?</h4>,
                content: 'Dołożymy wszelkich starań aby znaleźć prace w jak najkrótszym czasie dla Ciebie.',
            },
            {
                title: <h4 className='text-xl'>Współpracujecie z firmami?</h4>,
                content: 'Tak! Nasza firma specjalizuję się głównie w współpracy z firmami w celu pozyskiwania pracowników.',
            },
            {
                title: <h4 className='text-xl'>Z jakich krajów rekrutujecie pracowników?</h4>,
                content: 'Zatrudniamy osoby z Polski, Ukrainy, Białorusi, Rosji, Mołdawii oraz Gruzji a także z krajów Azjatyckich.',
            },
        ],
    };
    const styles = {
        bgColor: 'white',
        titleTextColor: "#FDBC01",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        arrowColor: "#FDBC01",
    };

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
                    ease: "easeInOut", duration: 1, delay: 0.2
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
            <div ref={ref}
                 className="flex sm:w-10/12 xl:w-8/12 flex-col items-center sm:m-10 sm:pt-14 sm:pb-14 xl:m-10 xl:pt-10
                 xl:pb-40"
                 id="najczesciej-zadawane-pytania">
                <motion.div animate={animation} initial={{opacity: 0}}>
                    <Faq
                        data={data}
                        styles={styles}
                    />
                </motion.div>
            </div>
        </>
    )
}

export default FaqList;
