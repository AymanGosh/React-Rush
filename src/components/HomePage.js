import LivePreview  from "./LivePreview";
import CodeEditor from "./CodeEditor";
import DescriptionPanel from "./DescriptionPanel";
import "./HomePage.css";
import React, { useEffect, useRef , useState} from "react";
import { challenges } from "../data/challenges";


const defaultCode = challenges[0].defaultCode;

export default function HomePage() {
  const [code, setCode] = useState(defaultCode);

  return (
  <div className="page-container">
      <header className="navbar">🚀 Navbar</header>

      <main className="main-grid">
        <div className="question">
          <DescriptionPanel/> 
        </div>

        <div className="code-editor"> 
          <CodeEditor  code={code} onChange={setCode} /> 
        </div>

        <div className="live-preview">  
          <LivePreview code={code} />     
        </div>
      </main>

      <footer className="footer">© 2025 Footer</footer>
    </div>
  );
}