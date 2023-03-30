import Books from "../data/fantasy.json";

import Card from "react-bootstrap/Card";

function AllBooks() {
  return (
    <>
      {Books.map((book, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default AllBooks;
