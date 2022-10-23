export const ArticlePage = (props) => {
    const {image, image2, side, title, title2, content2, content} = props
    return (
        <div className='my-16'>
            <div className={'text-2xl font-extralight justify-center flex mb-10'}>Lorem ipsum dolor sit amet</div>

            <div className={side === 'left' ? 'mr-60' : 'ml-60'}>
            <div className={side === 'left' ? 'flex mb-10 flex-wrap' :  'flex flex-wrap flex-row-reverse'}>
                <img alt='text' src={image} className='w-96'/>
                <div className={side === 'left' ? 'ml-10' : 'ml-10'}>
                    <div className='text-2xl font-extralight'>{title}</div>
                    <div className='text-xs'>{content}</div>
                </div>
            </div>

            <div className={side !== 'left' ? 'flex flex-wrap' :  'flex flex-row-reverse mb-20 flex-wrap'}>
                <img alt='text' src={image2} className='w-64'/>
                <div className={'text-right'}>
                    <div className='text-2xl font-extralight mr-16'>{title2}</div>
                    <div className='text-xs mr-16'>{content2}</div>
                </div>
            </div>
            </div>
        </div>
    )
}
