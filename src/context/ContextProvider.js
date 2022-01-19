import { useContext } from "react";
import { MeetingsContext, MeetingsProvider } from "./MeetingsContext";

export function useMeetings() {
  return useContext(MeetingsContext);
}

export default function ContextProvider({ children }) {
  return <MeetingsProvider>{children}</MeetingsProvider>;
}
