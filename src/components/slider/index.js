export function Slaider({imageArray}) {
    return (
        <div className=''>
            <div className='ml-28 mb-6 text-3xl font-extralight'>Lorem ipsum dolor sit amet, consectetur.</div>
        <div className='flex ml-28'>
            <div className='w-screen scrollbar-hide'>
                <div className='flex overflow-scroll'>
                    {imageArray.map((item, i) =>
                        <img className='mx-3' key={i} src={item} alt='text'/>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}
