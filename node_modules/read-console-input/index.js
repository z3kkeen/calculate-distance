import nodeReadLine from 'readline';
import deasync from 'deasync';

/**
 * Read input form the console.
 * @param {string} question 
 * @returns {string} input
 */
export default function readline(question) {
  const rl = nodeReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let input;
  rl.question(question, (answer) => {
    input = answer;
    rl.close();
  });
  deasync.loopWhile(() => typeof input === 'undefined');
  return input;
}
