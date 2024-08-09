import { memo, useCallback, useMemo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container, Col, Row, Alert } from 'react-bootstrap';
import ResponseGrid from './ResponseGrid';
import { shuffleArray } from '../lib/utils';
import { Answer, Question } from '../lib/types';

export default memo(function QuestionCard({
  questions,
}: {
  questions: Question[];
}) {
  const numberOfQuestions = questions.length;
  const [shuffledQuestions] = useState(
    () => shuffleArray(questions) as Question[]
  );

  const [activeQuestion, setActiveQuestion] = useState(1);
  const shuffledAnswers = useMemo(
    () =>
      shuffleArray(shuffledQuestions[activeQuestion - 1].answers) as Answer[],
    [shuffledQuestions, activeQuestion]
  );
  const [score, setScore] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const handleNextQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    setIsQuestionAnswered(false);
    setAnswerIsCorrect(false);
  };

  const isMobile = useMemo(() => window.innerWidth < 768, []);

  const handleAnswer = useCallback(
    (answer: Answer) => {
      if (isQuestionAnswered) return;
      setIsQuestionAnswered(true);
      if (answer.isCorrect) {
        setScore((prev) => prev + 1);
        setAnswerIsCorrect(true);
      }
    },
    [isQuestionAnswered]
  );

  return (
    <Card border="primary" style={{ width: isMobile ? '100%' : '1200px' }}>
      <Card.Header>
        <Container>
          <Row>
            <Col md={4}>
              Theme: {shuffledQuestions[activeQuestion - 1].theme}
            </Col>
            <Col md={4} className="text-center">
              Difficulté: {shuffledQuestions[activeQuestion - 1].difficulty}
            </Col>
            <Col md={4} className="text-end">
              Score: {score}/{numberOfQuestions}
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <Card.Title>Question {activeQuestion}</Card.Title>
        <Card.Text>{shuffledQuestions[activeQuestion - 1].question}</Card.Text>
        <ResponseGrid
          answers={shuffledAnswers}
          onAnswer={handleAnswer}
          isQuestionAnswered={isQuestionAnswered}
        />
        {isQuestionAnswered && (
          <Alert
            variant={answerIsCorrect ? 'success' : 'danger'}
            className="m-3 text-center"
          >
            {answerIsCorrect ? 'Bravo !' : ' Raté !'}
          </Alert>
        )}
        {/* //   (answerIsCorrect ? (
        //     <Card.Text className="text-success text-center m-3">
        //       Bravo !
        //     </Card.Text>
        //   ) : (
        //     <Card.Text className="text-danger text-center m-3">
        //       Raté !
        //     </Card.Text>
        //   )) */}

        {activeQuestion < numberOfQuestions && (
          <Button
            variant="primary"
            onClick={handleNextQuestion}
            disabled={!isQuestionAnswered}
            className="mt-3 mx-auto d-block"
          >
            Suivant
          </Button>
        )}
      </Card.Body>
    </Card>
  );
});
