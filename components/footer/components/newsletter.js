const Newsletter = () => {
    return (
        <>
            <div className='h-full w-full flex flex-col sm:pl-5 xl:pl-0 sm:mt-16 xl:mt-0'>
                <p className='max-w-sm text-sm text-white opacity-60 font-semibold'>Zasubskrybuj nasz newsletter, aby
                    otrzymywać najnowsze oferty pracy co tydzień!</p>
                <div className='flex flex-row mt-4'>
                    <input type='email' placeholder='Wpisz adres email'
                           className='sm:w-2/3 xl:w-60 p-3 rounded-sm text-black text-sm'/>
                    <input type='submit' value='Subskrybuj'
                           className='sm:w-1/3 xl:w-32 p-3 rounded-sm text-black text-sm font-semibold bg-yellow ml-3
                           sm:mr-3 xl:mr-0 cursor-pointer hover:text-white transition duration-300 transform'/>
                </div>
            </div>
        </>
    );
}

export default Newsletter;