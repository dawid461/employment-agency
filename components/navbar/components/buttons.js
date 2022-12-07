import {motion} from "framer-motion"
import {useState} from "react";
import ContactForm from "../../contact-form/contact-form";

const Buttons = (props) => {
    const [ShowPopup, setShowPopup] = useState(false);
    return (
        <>
            <div className='flex w-auto justify-end items-center'>
                <motion.button onClick={() => setShowPopup(true)} whileHover={{scale: 0.9}}
                               transition={{type: "spring", stiffness: 260, damping: 20, delay: 0.1}}
                               className='flex w-40 h-14 justify-center items-center mr-5 text-base text-trueGray800
                               font-semibold border-solid border-2 border-yellow rounded-md cursor-pointer
                               hover:bg-yellow hover:text-white'>Napisz
                    do Nas
                </motion.button>
                <motion.button onClick={() => setShowPopup(true)} whileHover={{scale: 0.9}}
                               transition={{type: "spring", stiffness: 260, damping: 20, delay: 0.1}}
                               className='flex w-28 h-14 justify-center items-center xl:mr-8 2xl:mr-20 text-base
                               text-Gray800 font-semibold border-solid border-2 border-yellow bg-yellow rounded-md
                               cursor-pointer hover:text-white'>Aplikuj
                </motion.button>
            </div>
            <ContactForm trigger={ShowPopup} setTrigger={setShowPopup}/>
        </>
    );
}

export default Buttons;