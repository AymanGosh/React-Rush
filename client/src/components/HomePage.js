import LivePreview  from "./LivePreview";
import CodeEditor from "./CodeEditor";
import DescriptionPanel from "./DescriptionPanel";
import "./HomePage.css";
import React, { useEffect, useRef , useState} from "react";
import { challenges } from "../data/challenges";
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
 


export default function HomePage({id}) {
  const [code, setCode] = useState(challenges[id].defaultCode);


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code }) // `code` is your state variable
      });

      const data = await response.json();
      console.log(data); // Show the result or update UI
      alert(data.message); // or use setState for test results
    } catch (err) {
      console.error('Error submitting code:', err);
      alert("❌ Failed to submit code");
    }
  };

  return (
  <div className="page-container">
      <header className="navbar">🚀 Navbar</header>
         
      <PanelGroup direction="horizontal" className="h-full">
        {/* Left Column: 2x width (66%) */}
        <Panel defaultSize={66}>
          <PanelGroup direction="vertical">
            {/* Top: Description */}
            <Panel defaultSize={30} className="live-preview live-preview p-4 overflow-auto">
               <DescriptionPanel /> 
            </Panel>
            <PanelResizeHandle className="h-1 bg-gray-300 cursor-row-resize" />
            {/* Bottom: CodeEditor */}
            <Panel defaultSize={70} className="p-3 overflow-auto">
              <CodeEditor code={code} onChange={setCode} />
            </Panel>
          </PanelGroup>
        </Panel>

        {/* Horizontal Resize Handle */}
        <PanelResizeHandle className="w-1 bg-gray-300 cursor-col-resize" />

        {/* Right Column: 1x width (34%) */}
        <Panel defaultSize={34} className="live-preview p-3 overflow-auto bg-gray-50 border-l border-gray-200">
          <LivePreview code={code} />
        </Panel>
      </PanelGroup>

 
      <footer className="footer">© 2025 Footer</footer>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
  Submit
</button>
    </div>
  );
}