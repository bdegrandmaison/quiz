import { Answer, Question, BorderType } from './types';

export const shuffleArray = (array: (Question | Answer | BorderType)[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const borderTypesArray: BorderType[] = [
  'success',
  'danger',
  'warning',
  'info',
];
