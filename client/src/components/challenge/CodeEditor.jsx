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


/**  
 * 

 * <Editor
  value={code}
  onChange={(value) => setCode(value)} // ✅ CORRECT
  defaultLanguage="javascript"
  theme="vs-dark"
/>

<Editor
  height="100%"
  language="javascript"
  theme="vs-dark"
  value={code}
  onChange={(value) => value && onChange(value)}
  options={{
    fontSize: 16,         // 👈 Increase or decrease as needed
    minimap: { enabled: false },  // Optional: Hide the minimap
  }}
/>
 */