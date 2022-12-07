import PhotosDesktop from './components/photos-desktop';
import PhotosMobile from './components/photos-mobile';
import TitleWihtText from './components/title-with-text';

const AboutUs = () => {
    return (
        <>
            <div
                className='h-full w-full flex sm:flex-col xl:flex-row sm:mt-16 md:mt-32 xl:mt-40 z-0 bg-white
                max-w-screen-2xl'
                id='o-nas'>
                <PhotosDesktop/>
                <PhotosMobile/>
                <TitleWihtText/>
            </div>

        </>
    );
}

export default AboutUs;
