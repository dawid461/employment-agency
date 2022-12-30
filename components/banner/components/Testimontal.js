import Image from "next/image";

const Testimontal = () => {
  return (
    <>
      <div
        className="custom-position justify-center items-center bg-white flex-row xl:flex 2xl:flex sm:hidden
                md:hidden lg:hidden"
      >
        <div className="pr-5 pb-7 float-left">
          <Image
            src="/media/karolina.png"
            alt="karolina"
            width={50}
            height={50}
          />
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-xl text-black font-semibold pb-2">Karolina</h4>
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.13273 1V3.3646C6.50285 3.44287 5.91612 3.72585 5.46273 4.17005C4.98045 4.65034 4.6184 5.23772 4.40605 5.88439C4.16524 6.59843 4.04536 7.34767 4.05136 8.1012H6.91844V13.9314H1.00693V8.64802C0.949791 7.2185 1.24678 5.79702 1.87149 4.50996C2.39026 3.50331 3.17154 2.65565 4.13264 2.05668C5.04794 1.49889 6.0699 1.13894 7.13273 1ZM16 1V3.3646C15.3426 3.42984 14.7261 3.71341 14.2487 4.17005C13.7687 4.65077 13.4091 5.2382 13.1994 5.88439C12.9526 6.59713 12.8302 7.34698 12.8373 8.1012H15.7118V13.9314H9.8003V8.64802C9.74087 7.21912 10.0353 5.79767 10.6575 4.50996C11.1783 3.50479 11.9592 2.65762 12.9186 2.05668C13.8477 1.49406 14.8852 1.13398 15.9631 1H16Z"
              stroke="#F59E0B"
            />
          </svg>

          <span className="text-base text-trueGray700 pt-2">
            Dzięki zespołowi Gregbuda znalazłam dobrze płatną pracę!
          </span>
        </div>
      </div>
    </>
  );
};

export default Testimontal;
