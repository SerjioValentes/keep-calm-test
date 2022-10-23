import {ArticlePage} from "../article";
import firstImage from '../../assets/article_for_web/rendered_09_result.jpg'
import secondImage from '../../assets/article_for_web/rendered_08_result.jpg'
import image1 from '../../assets/slider/DSCF3164_result.jpg'
import image2 from '../../assets/slider/DSCF3209_result.jpg'
import image3 from '../../assets/slider/DSCF9310_result.jpg'
import image4 from '../../assets/slider/mmBHXdiFh3w_result.jpg'
import image5 from '../../assets/slider/VAS_1108_result.jpg'
import image6 from '../../assets/slider/TreeOnTheWall_result.jpg'
import image7 from '../../assets/slider/VAS_1117_result.jpg'
import image8 from '../../assets/slider/VAS_1137_result.jpg'
import image9 from '../../assets/slider/VAS_1245_result.jpg'
import image10 from '../../assets/slider/VAS_7250_result.jpg'
import {Slaider} from "../slider";

export const MainPage = () => {
    const content = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    const content2 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
    return (
        <div className='w-full h-full'>
            <ArticlePage
                image2={secondImage}
                image={firstImage}
                title={'ut aliquip ex ea commodo consequat'}
                title2={'ut aliquip ex ea commodo consequat'}
                side={'left'}
                content={content}
                content2={content2}/>
            <Slaider
                imageArray={imageArray}/>

            <ArticlePage
                image2={secondImage}
                image={firstImage}
                title={'ut aliquip ex ea commodo consequat'}
                title2={'ut aliquip ex ea commodo consequat'}
                side={'left'}
                content={content}
                content2={content2}/>
        </div>
    )
}
