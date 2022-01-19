import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useMeetings } from "../context/ContextProvider";
import { formatDateTime } from "../utilities";

export default function AddMeetingPage() {
  const { updateMeeting, addMeeting } = useMeetings();
  const { getMeeting } = useMeetings();
  const { id } = useParams();
  const isEdit = !!id;
  const defaultValues = isEdit ? getMeeting(id) : null;
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateTimeRef = useRef();
  const locationRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const dateTime = dateTimeRef.current.value;
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dateTime,
      dateTimeFormated: formatDateTime(dateTime),
      location: locationRef.current.value,
    };
    isEdit ? updateMeeting(id, data) : addMeeting(data);
    navigate("/");
  }
  return (
    <>
      <Nav></Nav>
      <Container className="my-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              ref={titleRef}
              defaultValue={defaultValues?.title}
              placeholder="Enter Title"
              required
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              ref={descriptionRef}
              defaultValue={defaultValues?.description}
              placeholder="Enter Description"
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDateTime">
            <Form.Label>Date And Time</Form.Label>
            <Form.Control
              type="datetime-local"
              ref={dateTimeRef}
              defaultValue={defaultValues?.dateTime}
              required
              placeholder="Select Date And Time"
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              ref={locationRef}
              defaultValue={defaultValues?.location}
              placeholder="Enter Location"
              required
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
