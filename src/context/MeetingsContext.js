import { createContext, useState, useEffect } from "react";
import {
  addMeetingInFirebase,
  deleteMeetingInFirebase,
  getMeetings,
  updateMeetingInFirebase,
} from "../firebase";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const MeetingsContext = createContext();

export const MeetingsProvider = ({ children }) => {
  const [meetings, setMeetings] = useState([]);
  const [interests, setInterests] = useLocalStorage("interests", []);
  const [uploads, setUploads] = useLocalStorage("uploads", []);

  useEffect(() => {
    getMeetings((docs) =>
      setMeetings(
        docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          isInterested: interests.includes(doc.id),
          isUploaded: uploads.includes(doc.id),
        }))
      )
    );
  });

  const dataValue = {
    meetings,
    addMeeting(data) {
      addMeetingInFirebase({ ...data, interested: 0 }).then((e) =>
        setUploads((prev) => [...prev, e.id])
      );
    },
    deleteMeeting(id) {
      deleteMeetingInFirebase(id);
      setInterests((prev) => prev.filter((item) => item.id !== id));
    },
    updateMeeting(id, data) {
      updateMeetingInFirebase(id, data);
    },
    getMeeting(id) {
      return meetings.find((meeting) => meeting.id === id);
    },
    toggleInterest({ isInterested, interested, id }) {
      updateMeetingInFirebase(id, {
        interested: isInterested ? interested - 1 : interested + 1,
      });
      setInterests((prev) => {
        return isInterested
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      });
    },
  };
  return (
    <MeetingsContext.Provider value={dataValue}>
      {children}
    </MeetingsContext.Provider>
  );
};
