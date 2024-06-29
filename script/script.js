// JavaScript to initialize CodeMirror instances
var htmlEditor, cssEditor, jsEditor;

function run() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = cssEditor.getValue();
    let jsCode = jsEditor.getValue();
    let output = document.getElementById("output");
    
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

window.onload = function() {
    htmlEditor = CodeMirror(document.getElementById('html-code'), {
        mode: 'xml',
        theme: 'default',
        lineNumbers: true
    });

    cssEditor = CodeMirror(document.getElementById('css-code'), {
        mode: 'css',
        theme: 'default',
        lineNumbers: true
    });

    jsEditor = CodeMirror(document.getElementById('js-code'), {
        mode: 'javascript',
        theme: 'default',
        lineNumbers: true
    });
};
