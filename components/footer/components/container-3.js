import Link from 'next/link'
import {useState} from 'react';
import ContactForm from '../../contact-form/contact-form';

const Container3 = (props) => {
    const openPopup = () => {
        setShowPopup(true);
    }
    const [ShowPopup, setShowPopup] = useState(false);
    return (
        <>
            <div className='h-full w-full flex sm:pl-5 xl:pl-0 sm:mt-16 xl:mt-0 '>
                <ul className='flex flex-col text-white sm:text-md xl:text-xs sm:leading-9 xl:leading-6 opacity-60'>
                    <li>
                        <a
                            className='hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                            delay-75 ease-in-out'
                            onClick={openPopup}>Kontakt</a>
                    </li>
                    <li>
                        <a href="https://gregbud-wykonawstwo.pl/#najczesciej-zadawane-pytania"
                           className='hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                            delay-75 ease-in-out'>FAQ</a>
                    </li>
                    <li>
                        <Link href='/privacy-policy'><a
                            className='hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                             delay-75 ease-in-out'>Polityka
                            prywatności</a></Link>
                    </li>
                </ul>
            </div>
            <ContactForm trigger={ShowPopup} setTrigger={setShowPopup}/>
        </>
    );
}

export default Container3;