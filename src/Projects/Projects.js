import '../Common/common.css'
import './Projects.css'

import ProjectBox from './ProjectDetailBox'
import GitHubRepos from './GithubRepos.js'
import Divider from '../Common/Divider.js'

export default function Projects() {
    return (
        <div className='content' id='projects'>
            <div>
                <p className='blue-text main-text'>Github Projects</p>
                <div className='project-container'>
                    <GitHubRepos username="IrfanUddin0" />
                </div>
            </div>

            <Divider />
            <div>
                <p className='blue-text main-text'>Game Projects</p>
            </div>

            <div className='project-container'>

                <ProjectBox src="https://i.imgur.com/cvlUAQ8.png" link="https://youtu.be/snGed231NQM?si=L-2DfLOJVEuSQ7o3">
                    <p className='medium-text'>Multiplayer Unreal Engine Game</p>
                    <p className='gray-text'>A Multipler FPS Zombies game made using Unreal Engine with Blueprints and C++</p>
                </ProjectBox>
                <ProjectBox src="https://i.imgur.com/RTTQIdM.png" link="https://github.com/IrfanUddin0/ECS657U-Game-Dev-Project">
                    <p className='medium-text'>Group Unity Game Project</p>
                    <p className='gray-text'>A First-Person survival game made as part of Multi-Platform Game Development module in Universty, using Unity and C#</p>
                </ProjectBox>
                <ProjectBox src="https://camo.githubusercontent.com/5d87b1cf641fc88018a34058a979e478a237e2ff22780c095d5aacc4d2588777/68747470733a2f2f692e696d6775722e636f6d2f325a7033785a612e706e67" link="https://github.com/IrfanUddin0/4k-rhythm-game">
                    <p className='medium-text'>Vertical Scrolling Rhythm Game</p>
                    <p className='gray-text'>A 4k Rhythm Game, made this as an exercise for using React to make a game.</p>
                </ProjectBox>

                <ProjectBox src="https://i.imgur.com/MhCG1De.jpeg" link="https://i.imgur.com/MhCG1De.jpeg">
                    <p className='medium-text'>Realistic Surival Game</p>
                    <p className='gray-text'>WIP Project, Inspired by unreleased game unrecorded and realistic survival games such as Project Zomboid and SCUM</p>
                </ProjectBox>

                <ProjectBox src="" link="https://i.imgur.com/MhCG1De.jpeg">
                    <p className='medium-text'>AI Traffic Game</p>
                    <p className='gray-text'>WIP Project simulating vehicle traffic</p>
                </ProjectBox>

                <ProjectBox src="" link="">
                    <p className='medium-text'>VR Game</p>
                    <p className='gray-text'>WIP VR Game in Unreal Engine</p>
                </ProjectBox>
            </div>
        </div>
    )
}