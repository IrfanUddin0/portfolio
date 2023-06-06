import './App.css';

import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import About from './About/About'
import GithubButton from './Common/GithubButton';
import Divider from './Common/Divider';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Contact from './Contact/Contact';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar className='navbar' variant="dark">
                    <Container>
                        <Navbar.Brand href="#"><p className='title'>Irfan Uddin | Portfolio</p></Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <pre> </pre><GithubButton/>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <About />
            <Divider/>
            <Projects/>
            <Divider/>
            <Skills/>
            <Divider/>
            <Education/>
            <Divider/>
            <Contact/>
            <Divider/>
        </div>
    );
}

export default App;
