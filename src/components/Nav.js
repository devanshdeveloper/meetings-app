import { Navbar, Container, Button } from "react-bootstrap";

export function NavBtn({ variant, children, click }) {
  return (
    <Button className="m-2" variant={variant || "primary"} onClick={click}>
      {children}
    </Button>
  );
}

export default function NavBar({ children }) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>Meetings App</Navbar.Brand>
        <Navbar.Toggle aria-controls="Global-Navbar" />
        <Navbar.Collapse className="justify-content-end" id="Global-Navbar">
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
