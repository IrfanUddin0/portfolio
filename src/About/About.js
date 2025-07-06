import '../Common/common.css'
import './About.css';

import GithubButton2 from '../Common/GithubButton2';
import ContactButton from '../Common/ContactButton';
import LinkedInButton from '../Common/LinkedInButton';
import ItchioButton from '../Common/Itchio';

export default function About() {
    return (
        <div className="content" id='about'>
            <div className='image-wrapper'>
                <div className='background-image' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bggif.gif)` }}></div>
                <div className='about-flex-c'>
                    <div className='main-text white-text'>
                        <p>
                            Hi, I'm <span className='blue-text'> Irfan</span>
                        </p>
                    </div>
                    <div>
                        <p className='minor-text white-text'>
                            Computer Science graduate at Queen Mary University of London. I'm also an experienced hobbyist game dev and also like to explore domains such as real-time computer graphics, Virtual Reality and alot more.
                        </p>
                    </div>
                    <div style={{ borderRadius: 5, borderColor: 'red', width: '100%' }}>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1px',
                        }}
                    >
                        <div style={{ flex: '0 0 auto' }}>
                            <GithubButton2 />
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <ItchioButton />
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <LinkedInButton />
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <ContactButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}