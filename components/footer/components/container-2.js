const Container2 = () => {
  return (
    <>
      <div className="h-full w-full flex sm:pl-5 xl:pl-0 sm:mt-16 xl:mt-0 ">
        <ul className="flex flex-col text-white sm:text-md xl:text-xs sm:leading-9 xl:leading-6 opacity-60">
          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#o-nas"
              className="hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                           delay-75 ease-in-out"
            >
              O nas
            </a>
          </li>
          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#wspolpraca"
              className="hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                            delay-75 ease-in-out"
            >
              Współpraca
            </a>
          </li>
          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#oferta"
              className="hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                           delay-75 ease-in-out"
            >
              Usługi
            </a>
          </li>
          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#statystyki"
              className="hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                           delay-75 ease-in-out"
            >
              Statystyki
            </a>
          </li>
          <li>
            <a
              href="https://gregbud-wykonawstwo.pl/#klienci"
              className="hover:text-yellow active:text-yellow focus:text-yellow cursor-pointer duration-300
                            delay-75 ease-in-out"
            >
              Opinie
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Container2;
