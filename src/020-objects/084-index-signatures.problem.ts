// This should only be used when all keys are known and
// specified, or keys are all strings
// const scores: Record<string, number> = {};

interface Scores {
  [key: string]: number;
}
const scores: Scores = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;
