import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Meeting from "../components/Meeting";
import Nav from "../components/Nav";
import { useMeetings } from "../context/ContextProvider";

function NavBtn({ children, ...props }) {
  return (
    <Button className="m-2" {...props}>
      {children}
    </Button>
  );
}

export default function Home() {
  const { meetings } = useMeetings();
  const navigate = useNavigate();
  return (
    <>
      <Nav>
        <NavBtn onClick={() => navigate("/meeting/new")}>Add Meeting</NavBtn>
      </Nav>
      <Container className="my-3">
        <Row>
          {meetings.map((meeting) => (
            <Meeting key={meeting.id} meetingData={meeting} />
          ))}
        </Row>
      </Container>
    </>
  );
}
