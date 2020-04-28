
module.exports = function (val) {
    return JSON.parse(decodeURIComponent(val).replace(/=([^&]+)\&/g, "=\"$1\",\n\r").replace(/(^|\r)([^=]+)=/g, "\"$2\":").replace(/^/, '{').replace(/$/, '}'))
};