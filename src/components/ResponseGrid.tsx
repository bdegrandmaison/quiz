import Card, { CardProps } from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { borderTypesArray, shuffleArray } from '../lib/utils';
import { Answer } from '../lib/types';
import { memo, useMemo } from 'react';

type ResponseGridProps = {
  answers: Answer[];
  onAnswer: (answer: Answer) => void;
  isQuestionAnswered: boolean;
};

export default memo(function ResponseGrid({
  answers,
  onAnswer,
  isQuestionAnswered,
}: ResponseGridProps) {
  const shuffledBorderArray = useMemo(() => shuffleArray(borderTypesArray), []);
  const handleClick = (answer: Answer) => {
    onAnswer(answer);
  };

  return (
    <Row xs={1} md={2} className="g-4">
      {answers.map((answer, idx) => (
        <Col key={idx}>
          <Card
            border={shuffledBorderArray[idx] as CardProps['border']}
            onClick={() => handleClick(answer)}
          >
            <Card.Body style={{ height: '150px' }}>
              <Card.Title>Réponse {idx + 1}</Card.Title>
              <Card.Text>{answer.text}</Card.Text>
              {isQuestionAnswered && answer.isCorrect && (
                <Card.Text className="text-success text-center">
                  La bonne réponse
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
});
