import React from "react";
import { Card } from "react-bootstrap";

const Character = ({ characters }) => {
    return (
    <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ characters.image }/>
            <Card.Body>
                <Card.Title>{ characters.name }</Card.Title>
                    <Card.Text>
                        <span>Gender:  {characters.gender}</span>
                        <span>Species: {characters.species}</span>
                    </Card.Text>
            </Card.Body>
        </Card>
    </>
);
};

export default Character;
