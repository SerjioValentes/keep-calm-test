export function Slaider({imageArray}) {
    return (
        <div className='flex ml-28'>

            <div className='w-screen scrollbar-hide'>
                <div className='flex overflow-scroll'>
                    {imageArray.map((item, i) =>
                        <img className='mx-3' key={i} src={item} alt='text'/>
                    )}
                </div>
            </div>
        </div>
    )
}
