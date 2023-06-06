import '../Common/common.css'
import './About.css';

import GithubButton from '../Common/GithubButton';
import ContactButton from '../Common/ContactButton';

export default function About() {
    return (
        <div className="content" id='about'>
            <div className='image-wrapper'>
                <div className='background-image'></div>
                <div className='about-flex-c'>
                    <div className='main-text'>
                        <p>
                            Hi, I'm <span className='blue-text glow-blue'> Irfan</span>
                        </p>
                    </div>
                    <div>
                        <p className='minor-text'>
                            Currently a Computer Science student at Queen Mary University of London. I'm a hobbyist game dev and also like to explore domains such as real-time graphics rendering, Virtual Reality and AI.
                        </p>
                    </div>
                    <div>
                        <GithubButton /> <ContactButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}