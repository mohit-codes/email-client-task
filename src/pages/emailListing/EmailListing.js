import { useEffect, useState } from "react";
import "./emailListing.css";
import { useEmail } from "../../hooks/useEmail";
import { Filters, EmailCard, Email } from "../../components";

export const EmailListing = () => {
  const { fetchAllEmail, loadingAllEmails, emails, filterBy, setFilterBy } =
    useEmail();
  const [rightChild, setRightChild] = useState(null);

  useEffect(() => {
    fetchAllEmail();
  }, []);

  return (
    <div>
      <Filters filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="container">
        <div className="container__left-child">
          {loadingAllEmails ? (
            <p style={{ textAlign: "center", width: "100%" }}>Loading...</p>
          ) : (
            emails.map((email) => (
              <EmailCard
                key={email.id}
                email={email}
                setRightChild={setRightChild}
              />
            ))
          )}
        </div>
        {rightChild !== null && (
          <div className="container__right-child">
            <Email emailInfo={rightChild} />
          </div>
        )}
      </div>
    </div>
  );
};
