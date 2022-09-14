import React from 'react'
import { Card } from 'react-bootstrap'
import './customCard.style.css'

export const CustomCard = ({count, title}) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Body className="py-3 text-light">
        <Card.Title>{count}</Card.Title>
        <Card.Text className="fw-bolder fs-1">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}
