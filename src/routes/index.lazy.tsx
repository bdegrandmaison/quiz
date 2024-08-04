import { createLazyFileRoute } from '@tanstack/react-router';
import QuestionCard from '../components/QuestionCard';

export const Route = createLazyFileRoute('/')({
  component: QuestionCard,
});
