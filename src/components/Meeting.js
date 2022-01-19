import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMeetings } from "../context/ContextProvider";
import { getDaysLeft } from "../utilities";

function CardBtn({ children, ...props }) {
  return (
    <Button className="mx-2 my-1" {...props}>
      {children}
    </Button>
  );
}

export default function Meeting({ meetingData }) {
  const { deleteMeeting, toggleInterest } = useMeetings();
  const navigate = useNavigate();
  const {
    title,
    id,
    isInterested,
    description,
    interested,
    dateTime,
    isUploaded,
    dateTimeFormated,
    location,
  } = meetingData;
  const daysLeft = getDaysLeft(dateTime);
  return (
    <Col sm={12} md={6} lg={4} className="mb-3">
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <span>{title}</span>
          <span>
            {daysLeft
              ? daysLeft === 1
                ? `${daysLeft} day left`
                : `${daysLeft} days left`
              : "Today"}
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Text className="d-flex align-items-center justify-content-between">
            <span>{location}</span>
            <span className="text-muted fs-6">{dateTimeFormated}</span>
          </Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {isUploaded && (
            <>
              <CardBtn onClick={() => navigate(`/meeting/new/${id}`)}>
                Update
              </CardBtn>
              <CardBtn variant="danger" onClick={() => deleteMeeting(id)}>
                Delete
              </CardBtn>
            </>
          )}

          <CardBtn
            variant={isInterested ? "success" : "primary"}
            onClick={() => toggleInterest(meetingData)}
          >
            Interests : {interested}
          </CardBtn>
        </Card.Footer>
      </Card>
    </Col>
  );
}
