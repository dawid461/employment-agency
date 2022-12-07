import Image from 'next/image'

const ImageTablet = () => {
    return (
        <>
            <div className='w-full flex justify-center flex-col mt-16'>
                <Image src='/media/customers-tablet.svg' alt='tablet with comments' width={170} height={211}/>
            </div>
        </>
    );
}
export default ImageTablet;