import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowCard from "../../components/ShowCard";
import { fetchShows } from "../../features/shows/showsSlice";
import "./Home.css";

export default function Home() {
  const { shows, isLoading, isError } = useSelector((state) => state.shows);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>Something went wrong!!!</p>;
  }
  if (!isLoading && !isError && shows.length > 0) {
    content = shows.map((s) => <ShowCard key={s.score} details={s} />);
  }
  return (
    <div>
      <div className="home_display">{content}</div>
    </div>
  );
}
