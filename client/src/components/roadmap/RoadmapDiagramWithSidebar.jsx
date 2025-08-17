import React, { useMemo, useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import "./graph.css";
import { useNavigate } from "react-router-dom";

/** Button node with explicit handles "in" (left) and "out" (right) */
function ButtonNode({ data }) {
  const { label, variant = "blue", onClick } = data || {};
  return (
    <div style={{ position: "relative", padding: 2 }}>
      {/* incoming (target) */}
      <Handle
        type="target"
        id="in"
        position={Position.Top}
        style={{ background: "transparent", border: "none", width: 8, height: 8 }}
      />
      {/* outgoing (source) */}
      <Handle
        type="source"
        id="out"
        position={Position.Bottom}
        style={{ background: "transparent", border: "none", width: 8, height: 8 }}
      />
      <button
        type="button"
        className={`rf-btn ${variant}`}
        onClick={() => onClick?.(data)}
      >
        {label}
      </button>
    </div>
  );
}

const nodeTypes = { button: ButtonNode };

export default function RoadmapDiagramWithSidebar({
  nodes: nodesProp = [],
  edges: edgesProp = [],
  topicQuestions = {},
  onOpenTopic,
}) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTopicId, setActiveTopicId] = useState(null);

  const handleNodeButton = useCallback(
    (data) => {
      const topicId = data?.topicId;
      if (!topicId) return;
      setActiveTopicId(topicId);
      setSidebarOpen(true);
      onOpenTopic?.(topicId);
    },
    [onOpenTopic]
  );

  // FORCE all nodes to our custom type + inject onClick
  const nodes = useMemo(() => {
    return nodesProp.map((n) => ({
      ...n,
      type: "button",
      data: { ...(n.data || {}), onClick: handleNodeButton },
    }));
  }, [nodesProp, handleNodeButton]);

  // FORCE all edges to use our handle ids
  const edges = useMemo(() => {
    return edgesProp.map((e) => ({
      ...e,
      sourceHandle: "out",
      targetHandle: "in",
      type: e.type || "smoothstep",
    }));
  }, [edgesProp]);

  const qList = activeTopicId ? topicQuestions[activeTopicId] || [] : [];

  const gotoQuestion = useCallback(
    (qid) => navigate(`/question/${qid}`),
    [navigate]
  );

  return (
    <div className="rf-wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        defaultEdgeOptions={{
          type: "smoothstep",
          style: { stroke: "#9FB3C8", strokeWidth: 2 },
        }}
      >
        <Controls />
        <Background color="#334155" gap={16} />
      </ReactFlow>

      {/* Sidebar */}
      <aside className={`rf-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="rf-sidebar-header">
          <h3>{activeTopicId ? `Questions · ${activeTopicId}` : "Questions"}</h3>
          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rf-q-item"
              style={{ padding: 8 }}
            >
              Close
            </button>
          </div>
        </div>
        <div className="rf-sidebar-list">
          {qList.length === 0 && (
            <div style={{ opacity: 0.8 }}>No questions for this topic yet.</div>
          )}
          {qList.map((q) => (
            <button
              key={q.id}
              className="rf-q-item"
              onClick={() => gotoQuestion(q.id)}
            >
              {q.title}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
