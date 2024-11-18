import readline from 'node:readline';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface (stdin, stdout);

rl.question ('Input your score: ', (score) => {
     if (score >= 80) {
        rl.write('A')
     }
     else if (score >= 70 ){
        rl.write('B')
     }
     else if (score >= 60 ){
        rl.write('D')
     }
     else if (score >= 50 ){
        rl.write('D')
     }
     else {
        rl.write('F')
     }
     rl.close();
});