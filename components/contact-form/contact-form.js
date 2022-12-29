import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import kwesforms from "kwesforms";

const ContactForm = (props) => {
  //message after sent message. Message will hide after 15 seconds.
  const [showResults, setShowResults] = useState(false);
  const hideMessage = () => {
    setShowResults(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const recaptchaRef = React.useRef();

  const SendForm = (e) => {
    const data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });

    //message after sent message. Message will hide after 15 seconds.
    setShowResults(true);
    setTimeout(hideMessage, 10000);
    //------------------------------------------------------------
    reset();
  };

  //add this to onSubmit after added secret keys
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();
  };

  useEffect(() => {
    kwesforms.init();
  }, []);

  return props.trigger ? (
    <>
      <div
        className="popup-form flex flex-col items-center justify-center"
        id="popUp"
      >
        <div
          className="sm:max-w-xs md:max-w-lg xl:pb-10 xl:pt-5 bg-bgContactForm flex flex-col justify-center
                    items-center text-center"
        >
          <form
            //onSubmit={handleSubmit(SendForm)}
            className="w-full max-w-lg kwes-form"
            action="https://kwesforms.com/api/foreign/forms/F8pryiwFLnyCN6kD4hM5"
          >
            {/*<ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey="#" />*/}

            <div className="h-10 flex w-full justify-end mb-2">
              <button
                className="closePopup mr-5"
                onClick={() => props.setTrigger(false)}
              >
                &times;
              </button>
              {props.children}
            </div>

            <div className="flex w-full justify-center">
              <h2 className="text-2xl font-bold text-grayTitle sm:mb-5 md:mb-7">
                Formularz kontaktowy
              </h2>
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full flex flex-col items-center px-3 mb-3">
                <label
                  htmlFor="name"
                  className="block uppercase text-grayTitle text-xs font-bold mb-2"
                >
                  Imię i Nazwisko
                </label>
                <input
                  name="fullName"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "To pole jest wymagane!",
                    },
                    maxLength: {
                      value: 40,
                      message: "Maksymalna ilość znaków to 40!",
                    },
                  })}
                  className="appearance-none block w-3/4 text-grayTitle border rounded py-3 px-4
                                       mb-3 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="text-red-400 text-sm py-2">
                  <p className="text-red font-semibold">
                    {errors.fullName?.message}
                  </p>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full flex flex-col items-center px-3 mb-3">
                <label
                  htmlFor="email"
                  className="block uppercase text-xs font-bold mb-2"
                >
                  E-mail
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "To pole jest wymagane!",
                    },
                    maxLength: {
                      value: 60,
                      message: "Maksymalna ilość znaków to 60!",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Twój adres email jest niepoprawny!",
                    },
                  })}
                  className="appearance-none block w-3/4 text-grayTitle border rounded py-3 px-4
                                        mb-3 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-red-400 text-sm py-2">
                  <p className="text-red font-semibold">
                    {errors.email?.message}
                  </p>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="sm:h-32 md:h-full w-full flex flex-col items-center px-3">
                <label
                  htmlFor="message"
                  className="block uppercase text-grayTitle text-xs font-bold mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  {...register("text", {
                    required: {
                      value: true,
                      message: "To pole jest wymagane!",
                    },
                    maxLength: {
                      value: 255,
                      message: "Maksymalna ilość znaków to 40!",
                    },
                  })}
                  className="no-resize appearance-none block w-3/4 text-grayTitle border rounded
                                          py-3 px-4 leading-tight focus:outline-none h-48 resize-none"
                  placeholder="Napisz nam w jakiej sprawie się kontaktujesz :)"
                  id="message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <p className="text-red font-semibold">
                  {" "}
                  {errors.text?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="sm:h-12 md:h-full w-full flex flex-col items-center px-3">
                <p className="mt-2 text-small">
                  Wysyłając wiadomość zgadzam się na przetwarzanie moich danych
                  osobowych przez Gregbud Wykonawstwo,z siedzibą na ul.
                  Kazimierza Bartla 3, 33-100 Tarnów w celu odpowiedzi na moją
                  wiadomość, drogą telefoniczną lub poprzez e‑mail.*
                </p>
              </div>
            </div>

            <div className=" w-full flex flex-col items-center justify-center mt-2 mb-5">
              <div className="w-full flex justify-center">
                <button
                  className="bg-yellow shadow hover:bg-black hover:text-white focus:shadow-outline
                                    focus:outline-none text-white font-bold py-2 px-6 rounded transition delay-100"
                  type="submit"
                  id="sendButton"
                >
                  Wyślij
                </button>
              </div>

              {showResults ? (
                <div>
                  <p className=" mt-2 text-ld text-green font-semibold">
                    Wiadomość została wysłana.
                  </p>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
export default ContactForm;
