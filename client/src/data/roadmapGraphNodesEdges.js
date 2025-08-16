// Node variants: "purple" (root), "blue" (regular)
export const nodes = [
  { id: "arrays", type: "button", position: { x: 380, y: 10 },  data: { label: "Arrays & Hashing", topicId: "arrays", variant: "purple" } },

  { id: "two-pointers", type: "button", position: { x: 210, y: 110 }, data: { label: "Two Pointers", topicId: "two-pointers", variant: "blue" } },
  { id: "stack",        type: "button", position: { x: 550, y: 110 }, data: { label: "Stack", topicId: "stack", variant: "blue" } },

  { id: "binary",       type: "button", position: { x: 60,  y: 210 }, data: { label: "Binary Search", topicId: "binary", variant: "blue" } },
  { id: "sliding",      type: "button", position: { x: 260, y: 210 }, data: { label: "Sliding Window", topicId: "sliding", variant: "blue" } },
  { id: "linked",       type: "button", position: { x: 550, y: 210 }, data: { label: "Linked List", topicId: "linked", variant: "blue" } },

  { id: "trees",        type: "button", position: { x: 380, y: 300 }, data: { label: "Trees", topicId: "trees", variant: "blue" } },

  { id: "tries",        type: "button", position: { x: 120, y: 400 }, data: { label: "Tries", topicId: "tries", variant: "blue" } },
  { id: "backtracking", type: "button", position: { x: 640, y: 400 }, data: { label: "Backtracking", topicId: "backtracking", variant: "blue" } },

  { id: "heap",         type: "button", position: { x: 180, y: 480 }, data: { label: "Heap / Priority Queue", topicId: "heap", variant: "blue" } },
  { id: "graphs",       type: "button", position: { x: 480, y: 510 }, data: { label: "Graphs", topicId: "graphs", variant: "blue" } },
  { id: "dp-1d",        type: "button", position: { x: 770, y: 500 }, data: { label: "1-D DP", topicId: "dp-1d", variant: "blue" } },

  { id: "intervals",    type: "button", position: { x: 90,  y: 560 }, data: { label: "Intervals", topicId: "intervals", variant: "blue" } },
  { id: "greedy",       type: "button", position: { x: 280, y: 560 }, data: { label: "Greedy", topicId: "greedy", variant: "blue" } },
  { id: "adv-graphs",   type: "button", position: { x: 430, y: 590 }, data: { label: "Advanced Graphs", topicId: "adv-graphs", variant: "blue" } },
  { id: "dp-2d",        type: "button", position: { x: 610, y: 580 }, data: { label: "2-D DP", topicId: "dp-2d", variant: "blue" } },
  { id: "bit",          type: "button", position: { x: 810, y: 560 }, data: { label: "Bit Manipulation", topicId: "bit", variant: "blue" } },

  { id: "math",         type: "button", position: { x: 610, y: 650 }, data: { label: "Math & Geometry", topicId: "math", variant: "blue" } },
];

export const edges = [
  { id: "e1",  source: "arrays", target: "two-pointers" },
  { id: "e2",  source: "arrays", target: "stack" },

  { id: "e3",  source: "two-pointers", target: "binary" },
  { id: "e4",  source: "two-pointers", target: "sliding" },
  { id: "e5",  source: "stack",        target: "linked" },

  { id: "e6",  source: "binary",  target: "trees" },
  { id: "e7",  source: "sliding", target: "trees" },
  { id: "e8",  source: "linked",  target: "trees" },

  { id: "e9",  source: "trees", target: "tries" },
  { id: "e10", source: "trees", target: "backtracking" },

  { id: "e11", source: "tries", target: "heap" },
  { id: "e12", source: "backtracking", target: "graphs" },
  { id: "e13", source: "backtracking", target: "dp-1d" },

  { id: "e14", source: "heap", target: "intervals" },
  { id: "e15", source: "heap", target: "greedy" },
  { id: "e16", source: "graphs", target: "adv-graphs" },
  { id: "e17", source: "graphs", target: "dp-2d" },
  { id: "e18", source: "dp-1d", target: "bit" },

  { id: "e19", source: "dp-2d", target: "math" },
  { id: "e20", source: "bit",   target: "math" },
];
