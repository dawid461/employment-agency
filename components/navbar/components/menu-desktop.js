import {useState} from "react";
import ContactForm from "../../contact-form/contact-form";

const MenuDesktop = () => {
    function openPopup() {
        setShowPopup(true);
    }

    const [ShowPopup, setShowPopup] = useState(false);
    return (
        <>
            <div className='flex flex-row w-8/12 pr-5 items-center justify-end'>
                <ul className='flex h-6'>
                    <li className='link link-underline link-underline-yellow mr-2 ml-2 pl-2 pr-2 '>
                        <a href='https://gregbud-wykonawstwo.pl/#o-nas' className='cursor-pointer text-base
                        text-trueGray800 font-normal'>O Nas</a>
                    </li>
                    <li className='link link-underline link-underline-yellow mr-2 ml-2 pl-2 pr-2'>
                        <a href='https://gregbud-wykonawstwo.pl/#wspolpraca'
                           className='cursor-pointer text-base text-trueGray800 font-normal'>Współpraca</a>
                    </li>
                    <li className='link link-underline link-underline-yellow mr-2 ml-2 pl-2 pr-2'>
                        <a href='https://gregbud-wykonawstwo.pl/#oferta'
                           className='cursor-pointer text-base text-trueGray800 font-normal'>Nasze usługi</a>
                    </li>
                    <li className='link link-underline link-underline-yellow mr-2 ml-2 pl-2 pr-2'>
                        <a href='https://gregbud-wykonawstwo.pl/#statystyki'
                           className='cursor-pointer text-base text-trueGray800 font-normal'>Statystyki</a>
                    </li>
                    <li className='link link-underline link-underline-yellow mr-2 ml-2 pl-2 pr-2'>
                        <a className='cursor-pointer text-base text-trueGray800 font-normal'
                           onClick={openPopup}>Kontakt</a>
                    </li>
                </ul>
                <ContactForm trigger={ShowPopup} setTrigger={setShowPopup}/>
            </div>
        </>
    );
}

export default MenuDesktop;