const stream = require('stream');
const {encodeValue, decodeValue} = require('./caesarCipher')

class Cipher extends stream.Transform {
    constructor(action,shift) {
        super()
        this._shift = shift
        this._action = action
    }

    _transform(data, encoding, callback) {
        if(this._action === 'encode'){
            this.push([...data.toString()].map(el => encodeValue(el, this._shift)).join(''))
        }else{
            this.push([...data.toString()].map(el => decodeValue(el, this._shift)).join(''))
        }
        callback();
    }
}

module.exports = Cipher;