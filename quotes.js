const brain = require('brain.js');

const trainingData = [
  'I think therefore I am',
  'The only thing I know is that I know nothing',
  'The mind is furnished with ideas by experience alone',
  'Philosophy is a battle against the bewitchment of our intelligence by means of language',
  'Leisure is the mother of philosophy',
  'Happiness is the highest good',
  'Philosophy is at once the most sublime and the most trivial of human pursuits'
];

const network = new brain.recurrent.LSTM();
network.train(trainingData, {
  iterations: 1000,
  log: (stats) => {
    console.log(stats)
  }
});

const queryString = 'I think'

console.log(queryString + network.run(queryString));