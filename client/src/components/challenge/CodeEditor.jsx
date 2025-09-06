import Editor from '@monaco-editor/react';

export default function CodeEditor({ code, onChange }) {
  return (
        <Editor
      
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => onChange(value)} 
        theme="vs-dark"
        options={{
          fontSize: 16,         // 👈 Increase or decrease as needed
          minimap: { enabled: false },  // Optional: Hide the minimap
  }}
      />
  );
}