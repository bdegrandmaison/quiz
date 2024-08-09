import { createLazyFileRoute } from '@tanstack/react-router';
import QuestionCard from '../components/QuestionCard';
import describingUI from '../lib/questions/describingUI';

const Questions = () => <QuestionCard questions={describingUI} />;

export const Route = createLazyFileRoute('/')({
  component: Questions,
});
