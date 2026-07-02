const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const arg = process.argv[2];

if (arg) {
  const target = path.resolve(cwd, arg);
  if (!fs.existsSync(target)) {
    console.error(`File not found: ${arg}`);
    process.exit(1);
  }
  try {
    require(target);
  } catch (err) {
    console.error('Error while running', arg);
    console.error(err);
    process.exit(1);
  }
} else {
  const files = fs.readdirSync(cwd).filter(f => f.endsWith('.js') && f !== 'app.js');
  console.log('No script specified. Available .js files:');
  files.forEach(f => console.log('- ' + f));
  console.log('\nRun `node app.js <filename.js>` to execute one of these files.');
}
