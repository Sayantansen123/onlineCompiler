import { useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import {Editor} from "@monaco-editor/react";

function CodeEditor() {
  const [value,setValue] = useState("");
  const editorRef = useRef();

  const onMount = (editor) =>{
    editorRef.current = editor;
    editor.focus();
  }
  return (
    <Box>
      <Editor
       height="75vh"
       theme='vs-dark'
       defaultLanguage='javascript'
       defaultValue='//some content'
       value={value}
       onChange={
        (value)=> setValue(value)
       }
       onMount={onMount}
      />
    </Box>
  )
}

export default CodeEditor
