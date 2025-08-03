const { JSDOM } = require("jsdom");
const babel = require("@babel/core");
const React = require("react");
const ReactDOMClient = require("react-dom/client");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTest(userCode) {
  // Create virtual DOM
  const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`, {
    url: "http://localhost/",
  });
  global.window = dom.window;
  global.document = dom.window.document;
  global.HTMLElement = dom.window.HTMLElement;
  global.React = React;
  global.ReactDOM = ReactDOMClient;

  try {
    // Transpile JSX
    const transpiled = babel.transformSync(userCode, {
      presets: ["@babel/preset-react"],
    }).code;

    // Run user code
    const run = new Function("React", "ReactDOM", transpiled);
    run(React, ReactDOMClient);

    // 🔁 Wait for React to update DOM
    await delay(50);

    // Now test
    const button = document.getElementById("btn");
    if (!button) throw new Error("Button with id 'btn' not found");



    button.click();

    // Wait for React to update the DOM
    await delay(50);  // ✅ Add this

    const h1 = document.querySelector("h1");
    if (!h1 || !h1.textContent.includes("Count: 1")) {
    throw new Error("Expected <h1> to update to 'Count: 1' after click");
    }

    

    return { success: true, message: "✅ Passed all tests" };
  } catch (err) {
    return { success: false, message: "❌ " + err.message };
  }
}

module.exports = runTest;
