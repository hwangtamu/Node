var editor = CodeMirror.fromTextArea('code', {
    parserfile: ["parsepython.js"],
    stylesheet: "stylesheets/pythoncolors.css",
    path: "/",
    lineNumbers: true,
    textWrapping: false,
    indentUnit: 4,
    parserConfig: {'pythonVersion': 2, 'strictErrors': true}
});