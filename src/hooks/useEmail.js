import { useContext, useState } from "react";
import { EmailContext } from "../contexts";
import { BASE_URL, actionTypes } from "../utils/constants";
import { getFilteredEmails } from "../utils/helpers";

export const useEmail = () => {
  const { state, dispatch } = useContext(EmailContext);
  const [loadingSingleEmail, setLoadingSingleEmail] = useState(false);
  const [loadingAllEmails, setLoadingAllEmails] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  const fetchAllEmail = async () => {
    setLoadingAllEmails(true);
    const res = await fetch(BASE_URL, { method: "GET" });
    if (res.ok) {
      const emails = await res.json();
      dispatch({ type: actionTypes.INITIALIZE_EMAILS, payload: emails.list });
    }
    setLoadingAllEmails(false);
  };

  const markAsFavorite = (id) => {
    dispatch({ type: actionTypes.MARK_AS_FAVORITE, payload: id });
  };

  const markAsRead = (id) => {
    dispatch({ type: actionTypes.MARK_AS_READ, payload: id });
  };

  const fetchSingleEmail = async (id) => {
    setLoadingSingleEmail(true);
    const res = await fetch(`${BASE_URL}/?id=${id}`, { method: "GET" });
    if (res.ok) {
      const email = await res.json();
      dispatch({ type: actionTypes.INITIALIZE_SINGLE_EMAIL, payload: email });
    }
    setLoadingSingleEmail(false);
  };

  const emails = getFilteredEmails(state.emails, filterBy);

  return {
    email: state.email,
    emails,
    loadingSingleEmail,
    loadingAllEmails,
    fetchAllEmail,
    fetchSingleEmail,
    setFilterBy,
    filterBy,
    markAsFavorite,
    markAsRead,
  };
};
