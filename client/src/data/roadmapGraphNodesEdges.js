export const nodes = [
  // --- Hooks Fundamentals (Root) ---
  { id: "useState", type: "button", position: { x: 0, y: 0 }, data: { label: "useState", topicId: "useState", variant: "teal" } },
  { id: "useEffect",type: "button", position: { x: -100, y: 100 }, data: { label: "useEffect", topicId: "useEffect", variant: "teal" } },
  { id: "useRef",   type: "button", position: { x: 100, y: 100 }, data: { label: "useRef", topicId: "useRef", variant: "teal" } },

  // --- Advanced Hooks ---
  { id: "useMemo",     type: "button", position: { x: -250, y: 200 }, data: { label: "useMemo", topicId: "useMemo", variant: "teal" } },
  { id: "useCallback", type: "button", position: { x: -150, y: 200 }, data: { label: "useCallback", topicId: "useCallback", variant: "teal" } },
  { id: "useReducer",  type: "button", position: { x: -20, y: 200 }, data: { label: "useReducer", topicId: "useReducer", variant: "teal" } },
  { id: "useContext",  type: "button", position: { x: 100, y: 200 }, data: { label: "useContext", topicId: "useContext", variant: "teal" } },
  { id: "customHooks", type: "button", position: { x: 250, y: 200 }, data: { label: "Custom Hooks", topicId: "customHooks", variant: "teal" } },

 
];

export const edges = [
  // Hook fundamentals
  { id: "e1", source: "useState", target: "useEffect" },
  { id: "e2", source: "useState", target: "useRef" },

  // Advanced hooks
  { id: "e3", source: "useEffect", target: "useMemo" },
  { id: "e4", source: "useEffect", target: "useCallback" },
  { id: "e5", source: "useEffect", target: "useReducer" },
  { id: "e6", source: "useEffect", target: "useContext" },
  { id: "e7", source: "useEffect", target: "customHooks" },

  

];




/**
 * 
 * export const nodes = [
  // --- Hooks Fundamentals (Root) ---
  { id: "useState", type: "button", position: { x: 0, y: 0 }, data: { label: "useState", topicId: "useState", variant: "teal" } },
  { id: "useEffect",type: "button", position: { x: -100, y: 150 }, data: { label: "useEffect", topicId: "useEffect", variant: "teal" } },
  { id: "useRef",   type: "button", position: { x: 380, y: 50 }, data: { label: "useRef", topicId: "useRef", variant: "teal" } },

  // --- Advanced Hooks ---
  { id: "useMemo",     type: "button", position: { x: 160, y: 150 }, data: { label: "useMemo", topicId: "useMemo", variant: "teal" } },
  { id: "useCallback", type: "button", position: { x: 300, y: 150 }, data: { label: "useCallback", topicId: "useCallback", variant: "teal" } },
  { id: "useReducer",  type: "button", position: { x: 440, y: 150 }, data: { label: "useReducer", topicId: "useReducer", variant: "teal" } },
  { id: "useContext",  type: "button", position: { x: 580, y: 150 }, data: { label: "useContext", topicId: "useContext", variant: "teal" } },
  { id: "customHooks", type: "button", position: { x: 720, y: 150 }, data: { label: "Custom Hooks", topicId: "customHooks", variant: "teal" } },

  // --- State & Data Flow ---
  { id: "lifting",   type: "button", position: { x: 200, y: 250 }, data: { label: "Lifting State Up", topicId: "lifting", variant: "blue" } },
  { id: "propDrill", type: "button", position: { x: 380, y: 250 }, data: { label: "Prop Drilling", topicId: "propDrill", variant: "blue" } },

  // --- Routing ---
  { id: "router",    type: "button", position: { x: 560, y: 250 }, data: { label: "React Router", topicId: "router", variant: "blue" } },
  { id: "protected", type: "button", position: { x: 740, y: 250 }, data: { label: "Protected Routes", topicId: "protected", variant: "blue" } },

  // --- Performance ---
  { id: "lazy",      type: "button", position: { x: 280, y: 350 }, data: { label: "Lazy Loading", topicId: "lazy", variant: "cyan" } },
  { id: "error",     type: "button", position: { x: 460, y: 350 }, data: { label: "Error Boundaries", topicId: "error", variant: "cyan" } },

  // --- Testing ---
  { id: "testingLib", type: "button", position: { x: 640, y: 350 }, data: { label: "React Testing Library", topicId: "testingLib", variant: "cyan" } },
  { id: "jest",       type: "button", position: { x: 820, y: 350 }, data: { label: "Jest", topicId: "jest", variant: "cyan" } },

  // --- Ecosystem ---
  { id: "server",    type: "button", position: { x: 200, y: 450 }, data: { label: "Server Components", topicId: "server", variant: "cyan" } },
  { id: "query",     type: "button", position: { x: 380, y: 450 }, data: { label: "React Query", topicId: "query", variant: "cyan" } },
  { id: "animation", type: "button", position: { x: 560, y: 450 }, data: { label: "Animations", topicId: "animation", variant: "cyan" } },
  { id: "a11y",      type: "button", position: { x: 740, y: 450 }, data: { label: "Accessibility (a11y)", topicId: "a11y", variant: "cyan" } },
];

export const edges = [
  // Hook fundamentals
  { id: "e1", source: "useState", target: "useEffect" },
  { id: "e2", source: "useState", target: "useRef" },

  // Advanced hooks
  { id: "e3", source: "useEffect", target: "useMemo" },
  { id: "e4", source: "useEffect", target: "useCallback" },
  { id: "e5", source: "useEffect", target: "useReducer" },
  { id: "e6", source: "useEffect", target: "useContext" },
  { id: "e7", source: "useEffect", target: "customHooks" },

  // From hooks → state flow
  { id: "e8", source: "customHooks", target: "lifting" },
  { id: "e9", source: "customHooks", target: "propDrill" },

  // State flow → routing
  { id: "e10", source: "propDrill", target: "router" },
  { id: "e11", source: "router", target: "protected" },

  // Routing → performance
  { id: "e12", source: "protected", target: "lazy" },
  { id: "e13", source: "lazy", target: "error" },

  // Performance → testing
  { id: "e14", source: "error", target: "testingLib" },
  { id: "e15", source: "testingLib", target: "jest" },

  // Testing → ecosystem
  { id: "e16", source: "jest", target: "server" },
  { id: "e17", source: "server", target: "query" },
  { id: "e18", source: "query", target: "animation" },
  { id: "e19", source: "animation", target: "a11y" },
];

 * 
 */