import Editor from "@monaco-editor/react";

function MyEditor() {

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
                height="100%"
                width="100%"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue="//Start your code here to move the robot around !!!"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}
            />
        </>
    );
}

export default MyEditor;