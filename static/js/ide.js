let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");

    // Change mode based on the selected language
    document.getElementById('languages').addEventListener('change', function() {
        const language = this.value;

        let mode = '';
        switch (language) {
            case 'c':
            case 'cpp':
                mode = 'c_cpp';
                break;
            case 'python':
                mode = 'python';
                break;
            case 'php':
                mode = 'php';
                break;
            case 'node':
                mode = 'javascript';
                break;
            default:
                mode = 'text'; // Fallback to plain text
        }

        editor.session.setMode(`ace/mode/${mode}`);
    });
}