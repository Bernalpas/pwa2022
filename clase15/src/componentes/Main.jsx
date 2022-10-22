import React from 'react';
import { Row, Col } from "react-bootstrap";
import Character from "./Character";


function Main({characters}) {

    return ( 
        <Row>
            {characters.map((c) => (
                <Col key={c.id} className="my-2" xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Character characters={c}/>
                </Col>
            ))}
        </Row>
);
}

export default Main;