import { useEffect, useState } from 'react';
import * as Babel from '@babel/standalone';

export default function LivePreview({ code }) {
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const transpile = () => {
      try {
        const transpiledCode = Babel.transform(code, {
          presets: ['react', 'env']
        }).code;

        const html = `
          <html>
            <head></head>
            <body>
              <div id="root"></div>
              <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
              <script>
                try {
                  ${transpiledCode}
                } catch (err) {
                  const error = document.createElement('pre');
                  error.style.color = 'red';
                  error.innerText = err.message;
                  document.body.innerHTML = '';
                  document.body.appendChild(error);
                }
              </script>
            </body>
          </html>
        `;

        setSrcDoc(html);
      } catch (err) {
        const html = `<html><body><pre style="color:red;">${err.message}</pre></body></html>`;
        setSrcDoc(html);
      }
    };

    transpile();
  }, [code]);

  return (
    <iframe
  srcDoc={srcDoc}
  sandbox="allow-scripts"
  title="Live Preview"
  style={{ width: '100%', height: '100%', border: 'none' }}
  onError={() => {
    // Prevent error bubbling
    console.log("Iframe error handled.");
  }}
/>
  );
}
