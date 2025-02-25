/**
     * Cria um editor CodeMirror carregando o conteúdo de um arquivo externo.
     * @param {string} parentId - ID do elemento pai.
     * @param {string} editorId - ID único para o textarea.
     * @param {string} filePath - Caminho do arquivo .frag.
*/

export async function createCodeEditor(parentID, editorID, codeContent) {
    //  init 'HTML'
    const codeCanvas = document.getElementById(parentID);
    if (!codeCanvas) {
        console.error(`Elemento com ID "${parentID}" não encontrado.`);
        return;
      }

    const textarea = document.createElement('textarea');
    textarea.id = 'codeEditor' + editorID;
    textarea.value = codeContent;

    const canvas = document.createElement('canvas');
    canvas.id = 'canvas' + editorID;
    canvas.className = 'glCanvas';

    codeCanvas.appendChild(textarea);
    codeCanvas.appendChild(canvas);

    // init 'CodeMirror'
    CodeMirror.fromTextArea(textarea, {
        mode: "x-shader/x-fragment",
        lineNumbers: true,
        theme: "eclipse",
        readOnly: true,
        lineWrapping: true,
        viewportMargin: Infinity,
    });
    
}