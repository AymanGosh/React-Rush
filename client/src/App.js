import ChallengePage from "./components/challenge/ChallengePage";
import "./App.css";
 import {  Routes, Route,useParams } from "react-router-dom";
import RoadmapDiagramWithSidebar from "./components/roadmap/RoadmapDiagramWithSidebar";
import { nodes, edges } from "./data/roadmapGraphNodesEdges";
import { topicQuestions } from "./data/topicQuestions";

function QuestionPage() {
  // Render your editor/runner using question id from route
  // e.g., 
  const { id } = useParams();
//  return <div style={{ padding: 24, color: "#0f172a" }}>Question page… hook to your runner{id}</div>;
  return <ChallengePage id={id}/>

}

export default function App() {
  return (
      <div className="page-container">
      <header className="navbar">🚀 Navbar</header>
      <Routes>
        <Route
          path="/"
          element={<RoadmapDiagramWithSidebar nodes={nodes} edges={edges} topicQuestions={topicQuestions} />}
        />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
      <footer className="footer">© 2025 Footer</footer>

    </div>
   
  )
}
