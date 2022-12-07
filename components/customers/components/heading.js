import Image from 'next/image'

const Heading = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-start pl-5'>
                <div className='flex flex-col'>
                    <h4 className='text-sm text-yellow font-semibold'>OPINIE</h4>
                    <h2 className='sm:max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-lg pt-8 text-3xl font-semibold
                    text-trueGray800'>
                        Nie wierzysz nam na słowo - posłuchaj, co mówią nasi klienci !</h2>
                </div>
            </div>
        </>
    );
}

export default Heading;