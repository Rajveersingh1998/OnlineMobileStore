import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import admin1 from "./admin.jpg";

var FacultyInfoCard = () => {
  return (
    <>
      <div>
        <div className="text-center"><h3>Admins</h3> </div>
        <CardGroup>
         
        <Card >
          <Card.Img variant="top" src={admin1} />
          <Card.Body>
            <Card.Title>Akshay Zambre</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <br />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
            </Card>
           
        <Card>
          <Card.Img variant="top" src={admin1} />
          <Card.Body>
            <Card.Title>Rajveer Singh</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        {/* <Card>
          <Card.Img variant="top" src="./one.jpg" />
          <Card.Body>
            <Card.Title>Sagar</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card> */}
        </CardGroup>
        </div>
    </>
  );
};
export default FacultyInfoCard;
