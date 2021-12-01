// Determining whether the input is a declaration Statement
const DeclarationStatementReg = /.*(var|let|const){1}\x20+(\w+)$/;

function getVarCodeHintList(value) {
    if (DeclarationStatementReg.test(value) === false) {
        return [];
    }

    return [
        'Hello World'
    ];
}

module.exports = getVarCodeHintList