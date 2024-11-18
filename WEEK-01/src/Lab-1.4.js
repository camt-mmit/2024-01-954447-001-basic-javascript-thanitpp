import readline from 'node:readline'; 
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question('Input size: ', (size) => {
    const number = parseInt(size, 10); 
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid positive number!');
    } else {
        for (let row = 1; row <= number; row++) {
            if (row === 1 || row === number) {
                
                console.log('*'.repeat(number));
            } else {
                
                console.log('*' + ' '.repeat(number - 2) + '*');
            }
        }
    }
    rl.close();
});
