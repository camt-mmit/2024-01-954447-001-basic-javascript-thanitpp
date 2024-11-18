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
        
        for (let i = 1; i <= number; i++) {
            const spacesBefore = ' '.repeat(number - i);
            if (i === 1) {
                console.log(spacesBefore + '*'); 
            } else {
                const spacesBetween = ' '.repeat((i - 1) * 2 - 1);
                console.log(spacesBefore + '*' + spacesBetween + '*');
            }
        }

        
        for (let i = number - 1; i >= 1; i--) {
            const spacesBefore = ' '.repeat(number - i);
            if (i === 1) {
                console.log(spacesBefore + '*'); 
            } else {
                const spacesBetween = ' '.repeat((i - 1) * 2 - 1);
                console.log(spacesBefore + '*' + spacesBetween + '*');
            }
        }
    }
    rl.close();
});
