import Image from 'next/image';

const Customer3 = () => {
    return (
        <>
            <div
                className='sm:w-9/12 xl:w-10/12 flex flex-row items-start bg-white rounded-lg box-shadow-customers
                mt-10 p-5'>
                <div className='w-1/4 flex justify-end pr-1'>
                    <Image src='/media/customers-ewa.png' alt='photo with ewa customer' width={48} height={48}/>
                </div>

                <div className='w-3/4 flex flex-col items-start ml-2'>
                    <h4 className=' text-lg text-black font-semibold pb-2'>Ewa</h4>
                    <Image src='/media/vector.svg' alt='' width={15} height={13}/>
                    <p className='text-md pt-1 text-trueGray700'>Nie mogłam znaleźć pracy bez doświadczenia, ale pomógł
                        mi Gregbud!</p>
                </div>
            </div>
        </>
    );
}

export default Customer3;