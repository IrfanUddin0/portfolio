import '../Common/common.css'
import './Projects.css'

export default function ProjectBox(props) {
    return (
        <div className='box' onClick={()=> window.open(props.link, "_blank")}>
            <img className="box-img" alt={props.linkdesc? props.linkdesc : "image"} src={props.src ? props.src : "https://placehold.co/264x168/0f0f0f/555.png"}/>
            {props.children}
            <p style={{color : "rgb(0,100,255)"}}>
                {props.linkdesc ? props.linkdesc : (props.link? "...click to show more" : "")}
            </p>
        </div>
    )
}