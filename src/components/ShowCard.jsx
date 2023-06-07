import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ShowCard({ details }) {
  const { id, name, image, summary } = details?.show || {};

  const sliceSummary = summary.slice(0, 100) + "...";

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        variant="top"
        src={image?.original}
        style={{ height: "450px" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text
          dangerouslySetInnerHTML={{ __html: sliceSummary }}
        ></Card.Text>
        <Link to={`/shows/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
