import Editor from "@monaco-editor/react";

function MyEditor() {

    const printNimp = () => {
        console.log("Hello World");
    };

    function handleEditorChange(value, event) {
        // here is the current value
    }

    function handleEditorDidMount(editor, monaco) {
        console.log("onMount: the editor instance:", editor);
        console.log("onMount: the monaco instance:", monaco)
    }

    function handleEditorWillMount(monaco) {
        console.log("beforeMount: the monaco instance:", monaco);
    }

    function handleEditorValidation(markers) {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
    }

    return (
        <>
            <Editor
                height="50vh"
                width="50vw"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}
            />
        </>
    );
}

export default MyEditor;