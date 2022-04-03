import { useEmail } from "../../hooks/useEmail";
import { formatDate } from "../../utils/helpers";
import "./emailCard.css";

export const EmailCard = ({ email, setRightChild }) => {
  const { markAsRead } = useEmail();

  const handleClick = () => {
    setRightChild(email);
    markAsRead(email.id);
  };
  return (
    <div
      className={`email-card ${email.read ? "read" : "unread"}`}
      onClick={handleClick}
    >
      <div className="email-card__avatar">
        {email.from.name[0].toUpperCase()}
      </div>
      <div className="email-card__info">
        <p>
          From:
          <span className="bold">
            {email.from.name} {`<${email.from.email}>`}
          </span>
        </p>
        <p className="email-card__subject">
          Subject:<span className="bold">{email.subject}</span>
        </p>
        <div className="truncate-ellipsis">
          <p className="email-card__description">{`${email.short_description}`}</p>
        </div>
        <p>
          <span>{formatDate(email.date)}</span>
          {email.favorite && (
            <span className="email-card__fav-txt">Favorite</span>
          )}
        </p>
      </div>
    </div>
  );
};
