 
import Landing from "./components/Landing";
import HomePage from "./components/HomePage";

 import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoadmapDiagramWithSidebar from "./components/roadmap/RoadmapDiagramWithSidebar";
import { nodes, edges } from "./data/roadmapGraphNodesEdges";
import { topicQuestions } from "./data/topicQuestions";

function QuestionPage() {
  // Render your editor/runner using question id from route
  // e.g., const { id } = useParams();
  return <div style={{ padding: 24, color: "#0f172a" }}>Question page… hook to your runner</div>;
}

export default function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={<RoadmapDiagramWithSidebar nodes={nodes} edges={edges} topicQuestions={topicQuestions} />}
        />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>

   
  )
}
