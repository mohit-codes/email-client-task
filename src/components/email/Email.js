import { useEffect } from "react";
import { useEmail } from "../../hooks/useEmail";
import { formatDate } from "../../utils/helpers";
import "./email.css";
import "../emailCard/emailCard.css";

export const Email = ({ emailInfo }) => {
  const { fetchSingleEmail, email, loadingSingleEmail, markAsFavorite } =
    useEmail();

  useEffect(() => {
    fetchSingleEmail(emailInfo.id);
  }, [emailInfo.id]);

  const avatarLetter = emailInfo.from.name[0].toUpperCase();

  return (
    <div>
      <div className="email">
        <div className="email__avatar">{avatarLetter}</div>
        <div className="email__content">
          <div className="email__info">
            <div>
              <p className="email__subject">{emailInfo.subject}</p>
              <p>{formatDate(emailInfo.date)}</p>
            </div>
            <button
              className="email__fav-btn"
              onClick={() => markAsFavorite(email.id)}
            >
              Mark as favorite
            </button>
          </div>
          {loadingSingleEmail ? (
            <p style={{ textAlign: "center", width: "100%" }}>Loading...</p>
          ) : (
            <div
              className="email__body"
              dangerouslySetInnerHTML={{ __html: email.body }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
