import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../contact-form/contact-form";
import { useState } from "react";

const MenuMobile = (props) => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNavMobile = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const openPopupMobile = () => {
    setShowPopup(true);
    closeNavMobile();
  };
  const [ShowPopup, setShowPopup] = useState(false);
  return (
    <>
      <div
        className="sm:flex md:flex lg:flex items-center justify-end sm:w-screen md:w-screen lg:w-screen mr-8
                xl:hidden 2xl:hidden"
      >
        <button onClick={openNav}>
          <Image src="/hamburger.svg" alt="hamburger" width={24} height={22} />
        </button>
      </div>

      <div className="overlay" id="myNav">
        <ul className="flex items-center flex-col overlay-content">
          <li>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={closeNavMobile}
            >
              &times;
            </a>
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#o-nas"
              className="mt-20"
              onClick={closeNavMobile}
            >
              O Nas
            </a>
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#wspolpraca"
              onClick={closeNavMobile}
            >
              Współpraca
            </a>
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#oferta"
              onClick={closeNavMobile}
            >
              Usługi
            </a>
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#statystyki"
              onClick={closeNavMobile}
            >
              Statystyki
            </a>
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#klienci"
              onClick={closeNavMobile}
            >
              Opinie
            </a>
          </li>

          <li className="mt-14">
            <a onClick={openPopupMobile}>Kontakt</a>
            <ContactForm trigger={ShowPopup} setTrigger={setShowPopup} />
          </li>

          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#najczesciej-zadawane-pytania"
              onClick={closeNavMobile}
            >
              FAQ
            </a>
          </li>

          <li>
            <Link href="/privacy-policy">
              <a onClick={closeNavMobile}>Polityka Prywatności</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
