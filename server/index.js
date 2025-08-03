const express = require("express");
const cors = require("cors");
const runTest = require("./testRunner");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const code = req.body.code;
    const result = await runTest(code); // ✅ await the async function
    res.json(result); // ✅ send the result back properly
  } catch (err) {
    console.error("Test execution failed:", err);
    res.status(500).json({ success: false, message: "Server error: " + err.message });
  }
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});
