import { useEffect, useState } from 'react';
import * as Babel from '@babel/standalone';
import "./LivePreview.css"
export default function LivePreview({ code }) {
  const [srcDoc, setSrcDoc] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error('Error submitting code:', err);
      alert('❌ Failed to submit code');
    }
  };

  useEffect(() => {
    const transpile = () => {
      try {
        const transpiledCode = Babel.transform(code, {
          presets: ['react', 'env']
        }).code;

        const html = `
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <style>
                html, body, #root { height: 100%; margin: 0; }
                body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; }
              </style>
            </head>
            <body>
              <div id="root"></div>
              <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
              <script>
                try {
                  ${transpiledCode}
                } catch (err) {
                  const error = document.createElement('pre');
                  error.style.cssText = "color:#b91c1c; white-space:pre-wrap; padding:16px; font-family:monospace;";
                  error.textContent = err.stack || err.message;
                  document.body.innerHTML = '';
                  document.body.appendChild(error);
                }
              </script>
            </body>
          </html>
        `;
        setSrcDoc(html);
      } catch (err) {
        const html = `<html><body><pre style="color:#b91c1c;white-space:pre-wrap;padding:16px;font-family:monospace;">${err.message}</pre></body></html>`;

      }
    };

    transpile();
  }, [code]);

  return (
    <div className="lp-wrapper">
      <div className="lp-frame-wrap">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          title="Live Preview"
          className="lp-iframe"
          onError={() => console.log('Iframe error handled.')}
        />
      </div>

      <div className="lp-toolbar">
        <div className="lp-toolbar-left">
          <span className="lp-badge">Live Preview</span>
        </div>
        <div className="lp-toolbar-right">
          <button onClick={handleSubmit} className="lp-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
