import PayPageForm from "@/components/PayPageForm"

const page = () => {
    

    return (
        <div className='flex flex-col justify-center w-full h-full'>
            
            <div className='relative w-full h-full mx-auto transition md:w-4/6 lg:w-2/4 xl:w-[452px] lg:h-auto md:h-auto'>
                <div className='md:pb-16 md:pt-20'>
                    <div className='w-full h-full bg-white'>
                        <PayPageForm />
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-full mt-auto'>
                <img className='h-16' src='/images/emaillogo.png'/>
            </div>
        </div>
    )
}

export default page