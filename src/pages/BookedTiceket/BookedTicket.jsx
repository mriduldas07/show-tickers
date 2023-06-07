import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleShows } from "../../features/singleShows/singleShowsSlice";
import "./BookedTicket.css";

export default function BookedTicket() {
  const { singleShows } = useSelector((state) => state.singleShows);
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const dispatch = useDispatch();
  const { showsId } = useParams();

  const { name, type, language, premiered, id } = singleShows || {};
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSingleShows(showsId));
  }, [dispatch, showsId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      uName,
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate(`/shows/${id}`);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Your Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => setUName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Your Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Shows Name</label>
        <input className="form-control" value={name} disabled type="text" />
      </div>
      <div className="form-group">
        <label>Shows Type</label>
        <input className="form-control" value={type} disabled type="text" />
      </div>
      <div className="form-group">
        <label>Shows Language</label>
        <input className="form-control" value={language} disabled type="text" />
      </div>
      <div className="form-group">
        <label>Shows Premiered</label>
        <input
          className="form-control"
          value={premiered}
          disabled
          type="text"
        />
      </div>
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
}
