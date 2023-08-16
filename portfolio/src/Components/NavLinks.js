import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/NavBarStyles.css"
import logo from '../Images/newLogo.png'


function NavLinks() {

    const downloadCV = () => {
        fetch('assets/resume/Vimukthi_Maduwantha.pdf').then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Vimukthi Maduwantha.pdf';
                alink.click();
            });
        });
    }

    return (
        <Navbar expand="lg" style={{ width: '90%', marginLeft: '5%', position: 'relative', zIndex: '9999' }}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width='20%'
                        height='auto'
                    />
                    {/* <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '} */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ height: 'auto', textAlign: 'center' }}
                    // navbarScroll
                    >
                        <Nav.Link className='navLinks' href="/">Home</Nav.Link>
                        <Nav.Link className='navLinks' href="/aboutMe">About Me</Nav.Link>
                        <Nav.Link className='navLinks' href="/technologies">Technologies</Nav.Link>
                        <Nav.Link className='navLinks' href="/works">Work</Nav.Link>
                        <Nav.Link className='navLinks' href="/contactMe">Contact Me</Nav.Link>
                    </Nav>
                    <center>
                        <div /* style={{ backgroundColor: '#58626C', padding: '5px' }} */>
                            <Button style={{ textTransform: 'uppercase', fontWeight: 'bold' }} variant="outline-light" onClick={downloadCV}>Hire me</Button>{' '}
                        </div>
                    </center>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavLinks;