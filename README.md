# Caesar cipher CLI tool


####CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

CLI tool could accept 4 options (short alias and full name):
  1. **-a, --action:** an action encode/decode
  2. **-s, --shift:** a shift
  3. **-i, --input:** an input file
  4. **-o, --output:** an output file


####Details:
  - For encoding/decoding using only the English alphabet, all other characters will be kept untouched.
  - Action (encode/decode) and the shift (integer) are required
  - If the input file is missed - stdin will be used as an input source.
  - If the output file is missed - stdout will be used as an output destination.
  - If passed params are fine, the output (file or stdout) will contain encoded/decoded content of input (file or stdin).

####Installation

CLI tool requires [Node.js](https://nodejs.org/) v12+

Install the dependencies.

```
npm install
```
  
####Usage example:

```
node index -a encode -s 7 -i input.txt -o output.txt
```
```
node index --action encode --shift 5 --input "./files/input.txt" --output "./files/output.txt"
```
```
node index --action decode --shift 5 --input "./files/input.txt" --output "./files/output.txt"
```

> input.txt: `“Code never lies; comments sometimes do.” — Ron Jeffries`

> output.txt: `“Htij sjajw qnjx; htrrjsyx xtrjynrjx it.” — Wts Ojkkwnjx`

####Tech

CLI tool uses a number of open source projects to work properly:

* node.js - evented I/O for the backend
* [minimist](https://www.npmjs.com/package/minimist) - great cli argument parser



####ISC License (ISC)
Copyright (c) 2020, Pavel.V