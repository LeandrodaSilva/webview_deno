import { Denotron } from "../mod.ts";

const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}</h1>
  </body>
  </html>
`;

const webview = new Denotron();

webview.navigate(`data:text/html,${encodeURIComponent(html)}`);
webview.run();
