import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import { fetchSingleShows } from "../../features/singleShows/singleShowsSlice";

export default function DetailsShow() {
  const { singleShows, isLoading, isError } = useSelector(
    (state) => state.singleShows
  );
  const dispatch = useDispatch();
  const { showsId } = useParams();
  console.log(singleShows);
  useEffect(() => {
    dispatch(fetchSingleShows(showsId));
  }, [dispatch, showsId]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>Something went wrong!!!</p>;
  }
  if (!isLoading && !isError && singleShows.id) {
    content = <ShowDetails singleShows={singleShows} />;
  }
  return <div style={{ marginTop: "3rem" }}>{content}</div>;
}
