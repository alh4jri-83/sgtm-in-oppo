// KWMK-COMMENT-7731 : ingest marker in a code comment
const express = require('express');
const app = express();

// AWS documentation example key (public, non-functional) - triggers a secrets finding
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

app.get('/run', (req, res) => {
  // deliberate SAST sink so the scanner produces a fixable finding
  eval(req.query.cmd);
  res.send('ok');
});

module.exports = app;
