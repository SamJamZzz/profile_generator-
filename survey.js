const readline = require('readline');

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let output = '';

rl1.question("What's your name? ", (name) => {
  output = `${name} loves listening to `;
  rl1.question("What do you listen to while doing that? ", (music) => {
    output += `${music} while `;
    rl1.question("What's an activity you like doing? ", (activity) => {
      output += `${activity}, devouring `;
      rl1.question("What's your favourite thing to eat for that meal? ", (food) => {
        output += `${food} for `;
        rl1.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          output += `${meal}, prefers `;
          rl1.question("Which sport is your absolute favourite? ", (sport) => {
            output += `${sport} over any other sport, and is amazing at `;
            rl1.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              output += `${superPower}.`;
              console.log('\n')
              console.log(output);
              rl1.close();
            })
          })
        })
      })
    })
  })
});