import Icon from "./icons"

export default function Skills() {
    return (
        <div>
            <div className='content' id='skills'>
                <p className='blue-text main-text'>Skills</p>
                <p className="gray-text" style={{fontWeight : "bolder"}}>Languages</p>
                <Icon name='C++' img_src='images/cpp.svg'/>
                <Icon name='C#'  img_src='images/cs.svg'/>
                <Icon name='Java' img_src='images/java.svg'/>
                <Icon name='JavaScript' img_src='images/javascript.svg'/>
                <Icon name='python' img_src='images/python.svg'/>
                <Icon name='PHP' img_src='images/php.svg'/>
                <p className="gray-text" style={{fontWeight : "bolder"}}>Development Technologies</p>
                <Icon name='OpenGL'  img_src='images/ogl.svg'/>
                <Icon name='WebGL'  img_src='images/webgl.svg'/>
                <Icon name='Vulkan'  img_src='images/vulkan.svg'/>
                <Icon name='React'  img_src='images/react.svg'/>
                <Icon name='Bootstrap'  img_src='images/bootstrap.svg'/>
                <Icon name='MySQL'  img_src='images/mysql.svg'/>
                <p className="gray-text" style={{fontWeight : "bolder"}}>Software/Other</p>
                <Icon name='Unreal Engine' img_src='images/unreal.svg'/>
                <Icon name='Unity'  img_src='images/unity.svg'/>
                <Icon name='Blender' img_src='images/blender.svg'/>
                <Icon name='GitHub' img_src='images/github.svg'/>
                <Icon name='VS/VSC' img_src='images/vsc.svg'/>
                <Icon name='git' img_src='images/git.svg'/>
            </div>
        </div>
    )
}