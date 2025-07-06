import './App.css';

import {Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import About from './About/About'
import GithubButton from './Common/GithubButton';
import Divider from './Common/Divider';
import Experience from './Experience/Experience'
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Contact from './Contact/Contact';

function Navbarrr() {
    
    return (
        <Navbar expand="lg" className="navbar" >
            <Container fluid>
                <Navbar.Brand href="#"><p className='title'>Irfan Uddin | Portfolio</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <pre> </pre><GithubButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbarrr />
            </header>
            <About />
            <Divider />
            <Experience />
            <Divider />
            <Projects />
            <Divider />
            <Skills />
            <Divider />
            <Education />
            <Divider />
            <Contact />
            <Divider />
        </div>
    );
}

export default App;
