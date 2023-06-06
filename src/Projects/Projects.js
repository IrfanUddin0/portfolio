import '../Common/common.css'
import './Projects.css'

import ProjectBox from './ProjectDetailBox'

export default function Projects() {
    return (
        <div className='content' id='projects'>
            <p className='blue-text main-text glow-blue'>Highlighted Projects</p>
            <div className='project-container'>
                <ProjectBox src="" link="https://www.google.com">
                    <p className='medium-text'>Project Title</p>
                    <p className='gray-text'>Project Desc</p>
                </ProjectBox>
                <ProjectBox src="" link="https://www.google.com">
                    <p className='medium-text'>Project Title</p>
                    <p className='gray-text'>Project Desc</p>
                </ProjectBox>
                <ProjectBox src="" link="https://www.google.com">
                    <p className='medium-text'>Project Title</p>
                    <p className='gray-text'>Project Desc</p>
                </ProjectBox>
                <ProjectBox src="" link="https://www.google.com">
                    <p className='medium-text'>Project Title</p>
                    <p className='gray-text'>Project Desc</p>
                </ProjectBox>
                <ProjectBox src="" link="https://www.google.com">
                    <p className='medium-text'>Project Title</p>
                    <p className='gray-text'>Project Desc</p>
                </ProjectBox>
            </div>
        </div>
    )
}