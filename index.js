const stream = require('stream');
const fs = require('fs');
const Cipher = require('./utils/cipherStreamTransform')
const argv = require('minimist')(process.argv.slice(2));
const {checkArguments, checkInputFile, checkOutputFile} = require('./utils/helpers')


checkArguments(argv)

const action = argv.a || argv.action;
const shift = argv.s || argv.shift;
const input = argv.i || argv.input;
const output = argv.o || argv.output;

if (input) checkInputFile(input)
if (output) checkOutputFile(output)

const cipher = new Cipher(action, shift)
const read = input ? fs.createReadStream(input) : process.stdin
const write = output ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout

stream.pipeline(
    read,
    cipher,
    write,
    (err) => {
        if (err) {
            process.stderr.write(`Pipeline Error: something happened, but I'm not telling you what.`)
        } else {
            process.stdout.write(`Operation succeeded`)
        }
    }
)
