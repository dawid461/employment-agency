import Image from 'next/image'

const Testimontal = () => {
    return (
        <>
            <div
                className='custom-position justify-center items-center bg-white flex-row xl:flex 2xl:flex sm:hidden
                md:hidden lg:hidden'>
                <div className='pr-5 pb-7 float-left'>
                    <Image src='/media/karolina.png' alt='karolina' width={50} height={50}/>
                </div>

                <div className='flex flex-col items-start'>
                    <h4 className='text-xl text-black font-semibold pb-2'>Karolina</h4>
                    <Image src='/media/vector.svg' alt='vector' width={20} height={20}/>
                    <span className='text-base text-trueGray700 pt-2'>Dzięki zespołowi Gregbuda znalazłam dobrze
                        płatną pracę!</span>
                </div>
            </div>
        </>
    );
}

export default Testimontal;
