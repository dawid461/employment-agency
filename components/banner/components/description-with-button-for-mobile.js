import { motion } from "framer-motion";

const DescriptionWithButtonForMobile = () => {
  return (
    <>
      <div className="w-full banner-gradient flex-col sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
        <motion.div
          animate={{ y: ["20vw", "0vw"] }}
          transition={{ ease: "easeInOut", duration: 1.2, delay: 0.5 }}
          className="flex w-70 mt-8"
        >
          <p className="text-base text-trueGray700 pl-6 pt-10">
            Jesteśmy pionierem rekrutacji!
            <br /> Mamy ponad{" "}
            <span className="font-semibold">1500 obsadzonych</span>
            <br /> wykwalifikowanych
            <br /> pracowników, w ponad
            <span className="font-semibold"> 90 firmach.</span>
          </p>
        </motion.div>

        <motion.div
          animate={{ y: ["20vw", "0vw"] }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex w-70 pb-8 pl-6"
        >
          <a
            className="flex w-40 h-12 mt-8 mb-12 justify-center items-center text-sm text-Gray800
                    font-semibold border-solid border-2 border-yellow bg-yellow rounded-md cursor-pointer
                    hover:text-black hover:bg-white hover:border-black"
            href="https://gregbud-wykonawstwo.pl/#o-nas"
          >
            Rekrutuj z nami
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default DescriptionWithButtonForMobile;
