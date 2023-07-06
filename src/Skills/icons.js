import '../Common/common.css'
import './icons.css'

export default function Icon(props){
    return(
        <div className='icon'>
            <div className='icon-flex-c'>
                <img src={process.env.PUBLIC_URL + '/'+ props.img_src} alt='svg'/>
                <p className='gray-text'>{props.name}</p>
            </div>
        </div>
    )
}