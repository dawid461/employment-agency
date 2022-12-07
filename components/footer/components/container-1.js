import Image from 'next/image';
const Container1 = () => {
    return (
        <>
            <div className='h-full w-full flex flex-col items-start sm:pl-5 xl:pl-0'>
                <Image src='/media/footer-gregbud-logo.svg' alt='gregbud logo' width={79} height={108} />
                <p className='text-white text-xs opacity-40 leading-5 mt-2'>Ul. Kazimierza Bartla 3,<br /> 33-100 tarnów</p>
            </div>
        </>
    );
}

export default Container1;