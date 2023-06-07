import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShowDetails.css";

export default function ShowDetails({ singleShows }) {
  const navigate = useNavigate();
  const {
    image,
    name,
    type,
    language,
    genres,
    status,
    rating,
    premiered,
    summary,
    url,
    officialSite,
    schedule,
    network,
    id,
  } = singleShows || {};
  const handleTicketBooking = () => {
    navigate(`/booked/${id}`);
  };
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div className="image_description">
        <div className="image_container">
          <img src={image.original} alt="" />
        </div>
        <div className="description_container">
          <h1>{name}</h1>
          <h5>Type: {type}</h5>
          <h5>Language: {language}</h5>
          <h5 className="genres">
            {genres.map((g, i) => (
              <div className="tooltips" key={i}>
                {g}
              </div>
            ))}
          </h5>
          <h5>Status: {status}</h5>
          <h5>Rating: {rating.average}</h5>
          <h5>Premiered: {premiered}</h5>
          <button
            type="button"
            class="btn btn-success"
            onClick={handleTicketBooking}
          >
            Book Ticket
          </button>
        </div>
      </div>
      <div className="all_details_container" style={{ marginTop: "30px" }}>
        <h3>Summary</h3>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        <h3>Shows URL:</h3>
        <hr />
        <a href={url}> {url}</a>
        <h3>Schedule : </h3>
        <h6>Time: {schedule.time}</h6>
        <ul>
          {schedule.days.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        <small>
          (This time is only prefered for <b>{network?.country?.timezone}</b>{" "}
          timezone)*
        </small>
        <h3>Official Site:</h3>
        <hr />
        <a href={officialSite}> {officialSite}</a>
      </div>
    </div>
  );
}
