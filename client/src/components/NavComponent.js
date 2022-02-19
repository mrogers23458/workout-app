import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export default function NavComponent () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Thrive in Chaos Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/workouts">Workouts</Nav.Link>
                    <Nav.Link href="/workouts">Foods</Nav.Link>
                    <Nav.Link href="#pricing">Calories</Nav.Link>
                    <NavDropdown title="Notes" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/workouts/notes">Workout Notes</NavDropdown.Item>
                        <NavDropdown.Item href="/foods/notes">Foods Notes</NavDropdown.Item>
                        <NavDropdown.Item href="/calories/notes">Calories Notes</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}