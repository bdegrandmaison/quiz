import Card from 'react-bootstrap/Card';
import ResponseGrid from './ResponseGrid';

function QuestionCard() {
  return (
    <Card>
      <Card.Header>Theme: Général</Card.Header>
      <Card.Body>
        <Card.Title>Question 1</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <ResponseGrid />
      </Card.Body>
    </Card>
  );
}

export default QuestionCard;
