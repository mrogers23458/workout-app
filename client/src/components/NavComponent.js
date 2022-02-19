import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export default function NavComponent () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Thrive in Chaos Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Members" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Workouts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Calories</NavDropdown.Item>
                        <NavDropdown.Item href="/foods">Foods</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign Up</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}