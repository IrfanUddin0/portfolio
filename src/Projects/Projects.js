import '../Common/common.css'
import './Projects.css'

import ProjectBox from './ProjectDetailBox'

export default function Projects() {
    return (
        <div className='content' id='projects'>
            <p className='blue-text main-text glow-blue'>Projects</p>
            <div className='project-container'>
                <ProjectBox src="https://user-images.githubusercontent.com/95080990/276972337-ccaebd98-1c3c-4088-9589-3cc3c5230a28.png" link="https://github.com/IrfanUddin0/realtime-raytracer">
                    <p className='medium-text'>Realtime Raytracer</p>
                    <p className='gray-text'>A realtime software raytracer written in C++ using ImGui and Vulkan</p>
                </ProjectBox>
                <ProjectBox src="https://i.imgur.com/cvlUAQ8.png" link="https://youtu.be/snGed231NQM?si=L-2DfLOJVEuSQ7o3">
                    <p className='medium-text'>Multiplayer Unreal Engine Game</p>
                    <p className='gray-text'>A Multipler FPS Zombies game made using Unreal Engine with Blueprints and C++</p>
                </ProjectBox>
                <ProjectBox src="https://i.imgur.com/RTTQIdM.png" link="https://github.com/IrfanUddin0/ECS657U-Game-Dev-Project">
                    <p className='medium-text'>Group Unity Game Project</p>
                    <p className='gray-text'>A First-Person survival game made as part of Multi-Platform Game Development module in Universty, using Unity and C#</p>
                </ProjectBox>
                <ProjectBox src="https://i.imgur.com/8KKrNFp.png" link="https://i.imgur.com/8KKrNFp.png">
                    <p className='medium-text'>AI Language Learning App</p>
                    <p className='gray-text'>As my final year project, which is still in WIP, it's an AI powered, converstationl language learning app, made with React Native</p>
                </ProjectBox>
                <ProjectBox src="" link="">
                    <p className='medium-text'>VR Game</p>
                    <p className='gray-text'>WIP VR Game in Unreal Engine</p>
                </ProjectBox>
            </div>
        </div>
    )
}