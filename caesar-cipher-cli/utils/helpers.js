const fs = require('fs');
const checkArguments = argv => {
    if (!argv.action && !argv.a) {
        process.stderr.write(`Argument Error: the following argument is required: -a, --action`)
        process.exit(1);
    }
    if (argv.action && argv.a) {
        process.stderr.write(`Syntax Error: duplicate argument 'action'. Use -a or --action`)
        process.exit(1);
    }
    if (!(argv.action === 'encode' || argv.action === 'decode' || argv.a === 'encode' || argv.a === 'decode')) {
        process.stderr.write(`Invalid argument 'action': expected (code or decode). Example: -a code/decode`)
        process.exit(1);
    }
    if (!argv.shift && !argv.s) {
        process.stderr.write(`Argument Error: the following argument is required: -s, --shift`)
        process.exit(1);
    }
    if (argv.shift && argv.s) {
        process.stderr.write(`Syntax Error: duplicate argument 'shift'. Use -s or --shift`)
        process.exit(1);
    }
    if ((argv.shift && typeof argv.shift !== 'number') || (argv.s && typeof argv.s !== 'number')) {
        process.stderr.write(`Invalid argument type 'shift': expected integer. Example: -s 3`)
        process.exit(1);
    }
    if (argv.input && argv.i) {
        process.stderr.write(`Syntax Error: duplicate argument 'input'. Use -i or --input`)
        process.exit(1);
    }
    if (argv.output && argv.o) {
        process.stderr.write(`Syntax Error: duplicate argument 'output'. Use -o or --output`)
        process.exit(1);
    }
}

const checkInputFile = file => {
    fs.access(file, fs.constants.F_OK | fs.constants.R_OK, (err) => {
        if (err) {
            err.code === 'ENOENT'
                ? process.stderr.write(`File Error: input file doesn't exist.`)
                : process.stderr.write(`File Error: input file is not readable.`)
            process.exit(1);
        }
    });

}

const checkOutputFile = file => {
    fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if (err) {
            err.code === 'ENOENT'
                ? process.stderr.write(`File Error: output file doesn't exist.`)
                : process.stderr.write(`File Error: output file is read-only.`)
            process.exit(1);
        }
    });
}

module.exports = {checkArguments: checkArguments, checkInputFile: checkInputFile, checkOutputFile: checkOutputFile}