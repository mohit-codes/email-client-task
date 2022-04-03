import "./filters.css";

export const Filters = ({ filterBy, setFilterBy }) => {
  return (
    <div className="filters">
      <p>Filter By:</p>
      <button
        className={
          filterBy === "UNREAD" ? "filters__button-selected" : "filters__button"
        }
        onClick={() =>
          filterBy === "UNREAD" ? setFilterBy("") : setFilterBy("UNREAD")
        }
      >
        Unread
      </button>
      <button
        className={
          filterBy === "READ" ? "filters__button-selected" : "filters__button"
        }
        onClick={() =>
          filterBy === "READ" ? setFilterBy("") : setFilterBy("READ")
        }
      >
        Read
      </button>
      <button
        className={
          filterBy === "FAVORITE"
            ? "filters__button-selected"
            : "filters__button"
        }
        onClick={() =>
          filterBy === "FAVORITE" ? setFilterBy("") : setFilterBy("FAVORITE")
        }
      >
        Favorites
      </button>
    </div>
  );
};
