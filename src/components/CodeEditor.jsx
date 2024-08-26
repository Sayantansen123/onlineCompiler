import { useRef, useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Editor } from "@monaco-editor/react";
import LanguageSelector from './LanguageSelector';
import Output from './Output';

function CodeEditor() {
  const [value, setValue] = useState("");
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const onSelect = (language) => {
    setLanguage(language);
  }
  return (
    <Box>
      <HStack spacing={4}>
        <Box w='50%'>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme='vs-dark'
            language={language}
            defaultValue='//some content'
            value={value}
            onChange={
              (value) => setValue(value)
            }
            onMount={onMount}
          />
        </Box>
        <Output/>
      </HStack>

    </Box>
  )
}

export default CodeEditor
