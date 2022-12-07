import Heading from './components/heading.js';
import Counter1 from './components/counter-1.js';
import Counter2 from './components/counter-2.js';
import Counter3 from './components/counter-3.js';
import Counter4 from './components/counter-4.js';
import BannerStatistics from './components/banner-statistics.js';

const Statistics = () => {
    return (
        <>

            <div className='h-full flex w-full sm:flex-col xl:flex-row items-center' id='statystyki'>

                <div
                    className='flex sm:w-full xl:w-3/12 2xl:w-5/12 flex-col sm:pt-20 sm:pb-36 xl:pb-96 bg-bgStatistics'>
                    <div className='max-w-screen-2xl'>
                        <Heading/>
                        <div className='sm:flex md:flex lg:flex xl:hidden 2xl:hidden flex-col'>
                            <Counter1/>
                            <Counter2/>
                            <Counter3/>
                            <Counter4/>
                            <BannerStatistics/>
                        </div>
                    </div>
                </div>

                <div
                    className='2xl:flex xl:flex sm:hidden md:hidden lg:hidden w-10/12 flex-col items-center pb-72
                    2xl:pr-24 w-8/12 max-w-screen-2xl'>
                    <div className='w-1/2 flex flex-row'>
                        <Counter1/>
                        <Counter2/>
                    </div>
                    <div className='w-1/2 flex flex-row'>
                        <Counter3/>
                        <Counter4/>
                    </div>
                </div>
            </div>

            <div className='sm:hidden md:hidden lg:hidden xl:flex 2xl:flex w-full'>
                <BannerStatistics/>
            </div>

        </>
    );
}

export default Statistics;