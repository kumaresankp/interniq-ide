let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function executeCode() {
    const language = document.getElementById('languages').value;
    const code = ace.edit('editor').getValue();  // Fetch code from Ace editor

    $.ajax({
        url: '/execute',
        method: 'POST',
        data: {
            language: language,
            code: code
        },
        success: function(response) {
            $('.output').text(response.output);  // Display output
        },
        error: function(xhr, status, error) {
            $('.output').text('Error: ' + error);  // Handle errors
        }
    });
}