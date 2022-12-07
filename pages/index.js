import Head from 'next/head'
import Navbar from '../components/navbar/navbar.js';
import Banner from '../components/banner/banner.js';
import AboutUs from '../components/about-us/about-us.js';
import Cooperation from '../components/cooperation/cooperation.js';
import Offer from '../components/offer/offer.js';
import BannerOffer from '../components/offer/components/banner-offer.js';
import Statistics from '../components/statistics/statistics.js';
import Customers from '../components/customers/customers.js';
import FaqList from '../components/faq/faq-list.js';
import Footer from '../components/footer/footer.js';
import CookieConsent from "react-cookie-consent";
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Head>
                <title>Gregbud Wykonawstwo - Agencja pośrednictwa pracy</title>
                <meta name="description"
                      content="Jesteśmy pionierem rekrutacji! Mamy ponad 1500 obsadzonych wykwalifikowanych pracowników,
                      w ponad 90 firmach."/>
                <meta name="robots" content="follow"/>
                <meta name='lang'/>
                <meta charset="utf-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1"></meta>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Agencja pośrednictwa pracy"/>
                <meta property="og:site_name" content="Gregbud Wykonawstwo"/>
                <meta property="og:url" content="https://gregbud-wykonawstwo.pl/"/>
                <meta property="og:description"
                      content="Jesteśmy pionierem rekrutacji! Mamy ponad 1500 obsadzonych wykwalifikowanych pracowników,
                       w ponad 90 firmach."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://gregbud-wykonawstwo.pl/opengraph-gregbud-min.png"></meta>
                <script
                    src="https://www.google.com/recaptcha/api.js"
                    async
                    defer
                ></script>
            </Head>
            <CookieConsent
                location="bottom"
                buttonText="Zamknij"
                cookieName="myAwesomeCookieName2"
                style={{background: "#272727"}}
                buttonStyle={{color: "#272727", fontSize: "14px", fontWeight: 'bold'}}
                expires={150}
            >
                Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze
                strony oznacza, że zgadzasz się na ich użycie.{" "}
                <Link href="/privacy-policy">
                    <a className='text-sm text-yellow font-semibold'>Polityka Prywatności</a>
                </Link>
            </CookieConsent>

            <div className="flex flex-col w-full h-full items-center">
                <div className="flex sm:w-full xl:w-11/12 flex-col items-center">
                    <Navbar/>
                    <Banner/>
                    <AboutUs/>
                </div>

                <div className="flex w-full flex-col justify-center items-center">
                    <Cooperation/>
                </div>
                <div className="flex w-full flex-col justify-end">
                    <BannerOffer/>
                </div>

                <div className="flex sm:w-full xl:w-11/12 flex-col items-center">
                    <Offer/>
                </div>

                <div className="flex flex-col w-full items-center justify-center">
                    <Statistics/>
                    <Customers/>
                    <FaqList/>
                </div>

                <div className='flex flex-col w-full'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home;
