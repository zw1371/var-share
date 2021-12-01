const reg = /^\x20*(var|let|const){1}\x20+(\w+)\x20+$/;

function extractVarname(value) {
    let result = reg.exec(value),
        varnames = [];

    if (Array.isArray(varnames) && varnames.length >= 2) {
        varnames.push(result[2]);
    }

    return varnames;
}

module.exports = extractVarname