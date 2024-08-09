export type Question = {
  question: string;
  answers: Answer[];
  theme: string;
  difficulty: DifficultyType;
};

export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type BorderType = 'success' | 'danger' | 'warning' | 'info';

export type DifficultyType = 'easy' | 'medium' | 'hard';
