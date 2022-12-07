import CountUp from 'react-countup';
import LoadInView from './load-in-view';

const Counter2 = () => {
    return (
        <>
            <div className='w-full flex flex-col items-center mt-28'>
                <LoadInView>
                    <div className='flex text-yellow font-bold text-7xl'>
                        <CountUp start={1} end={1300} duration={3}/>
                    </div>
                </LoadInView>

                <LoadInView>
                    <div className='flex text-md text-trueGray600 pt-4'>
                        <p>CV w naszej bazie</p>
                    </div>
                </LoadInView>
            </div>
        </>
    );
}

export default Counter2;