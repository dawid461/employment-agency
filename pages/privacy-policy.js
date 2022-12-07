import Head from 'next/head';
import Navbar from '../components/navbar/navbar.js';
import Text from '../components/privacy-policy/components/text.js';
import Footer from '../components/footer/footer.js';
import ContactForm from '../components/contact-form/contact-form.js';

const PrivacyPolicy = () => {

    return (
        <>
            <Head>
                <title>Gregbud Wykonawstwo - Agencja pośrednictwa pracy</title>
                <meta name="description" content="Agencja pośrednictwa pracy"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="flex flex-col w-full h-full items-center">
                <div className="flex sm:w-full xl:w-11/12 flex-col items-center">
                    <Navbar/>
                </div>

                <div className="flex sm:w-10/12 xl:w-8/12 flex-col sm:m-10 sm:pt-14 sm:pb-14 xl:m-20 xl:pt-20 xl:pb-20">
                    <Text/>
                </div>

                <div className='flex flex-col w-full'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;