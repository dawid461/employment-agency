const Copyright = () => {
    const year = new Date();
    return (
        <>
            <div className='h-full w-7/12 flex sm:flex-col xl:flex-row sm:pl-5 xl:pl-0 mt-5  '>
                <p className='text-xs text-white opacity-30 md:pl-4 lg:pl-7'>Gregbud Wykonawstwo {year.getFullYear()} ©.
                    Wszystkie prawa zastrzeżone.</p>
            </div>
        </>
    );
}

export default Copyright;