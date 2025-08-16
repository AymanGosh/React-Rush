import React, { useMemo, useCallback, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import "./graph.css";
import { useNavigate } from "react-router-dom";

/** Custom node that renders a real <button> */
function ButtonNode({ data }) {
  const { label, variant = "blue", onClick } = data;
  return (
    <div style={{ padding: 2 }}>
      <button type="button" className={`rf-btn ${variant}`} onClick={() => onClick?.(data)}>
        {label}
      </button>
    </div>
  );
}
const nodeTypes = { button: ButtonNode };

/** Main component
 * Props:
 * - nodes: ReactFlow nodes[] (type: "button", data: {label, topicId, variant})
 * - edges: ReactFlow edges[]
 * - topicQuestions: { [topicId: string]: Array<{ id: string, title: string }> }
 * - onOpenTopic?: (topicId) => void   // optional telemetry
 */
export default function RoadmapDiagramWithSidebar({
  nodes: nodesProp,
  edges: edgesProp,
  topicQuestions = {},
  onOpenTopic,
}) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTopicId, setActiveTopicId] = useState(null);

  /** when a node's button is clicked */
  const handleNodeButton = useCallback(
    (data) => {
      const topicId = data.topicId;
      setActiveTopicId(topicId);
      setSidebarOpen(true);
      onOpenTopic?.(topicId);
    },
    [onOpenTopic]
  );

  /** wire the callback into each node's data */
  const nodes = useMemo(
    () =>
      (nodesProp || []).map((n) =>
        n.type === "button" ? { ...n, data: { ...n.data, onClick: handleNodeButton } } : n
      ),
    [nodesProp, handleNodeButton]
  );
  const edges = useMemo(() => edgesProp || [], [edgesProp]);

  const qList = activeTopicId ? topicQuestions[activeTopicId] || [] : [];

  const gotoQuestion = useCallback(
    (qid) => {
      // navigate to your question page
      navigate(`/question/${qid}`);
    },
    [navigate]
  );

  return (
    <div className="rf-wrapper">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Controls />
        <Background color="#334155" gap={16} />
      </ReactFlow>

      {/* Sidebar */}
      <aside className={`rf-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="rf-sidebar-header">
          <h3>{activeTopicId ? `Questions · ${activeTopicId}` : "Questions"}</h3>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => setSidebarOpen(false)} className="rf-q-item" style={{ padding: 8 }}>
              Close
            </button>
          </div>
        </div>
        <div className="rf-sidebar-list">
          {qList.length === 0 && <div style={{ opacity: 0.8 }}>No questions for this topic yet.</div>}
          {qList.map((q) => (
            <button key={q.id} className="rf-q-item" onClick={() => gotoQuestion(q.id)}>
              {q.title}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
