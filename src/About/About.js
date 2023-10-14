import '../Common/common.css'
import './About.css';

import GithubButton from '../Common/GithubButton';
import ContactButton from '../Common/ContactButton';
import LinkedInButton from '../Common/LinkedInButton';

export default function About() {
    return (
        <div className="content" id='about'>
            <div className='image-wrapper'>
                <div className='background-image' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/bggif.gif)`}}></div>
                <div className='about-flex-c'>
                    <div className='main-text'>
                        <p>
                            Hi, I'm <span className='blue-text glow-blue'> Irfan</span>
                        </p>
                    </div>
                    <div>
                        <p className='minor-text'>
                            Currently a Computer Science student at Queen Mary University of London. I'm also an experienced hobbyist game dev and also like to explore domains such as real-time computer graphics, Virtual Reality and alot more fields that interests me.
                        </p>
                    </div>
                    <div>
                        <GithubButton /> <LinkedInButton/> <ContactButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}