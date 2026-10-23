"""Local production preview with an isolated browser QA harness. Never deployed."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import urllib.parse
root=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  parsed=urllib.parse.urlparse(self.path)
  if parsed.path=='/qa':
   data=(root/'scripts/qa.html').read_bytes();self.send_response(200);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write(data);return
  if parsed.path=='/qa/axe.min.js':
   data=(root/'node_modules/axe-core/axe.min.js').read_bytes();self.send_response(200);self.send_header('Content-Type','application/javascript');self.end_headers();self.wfile.write(data);return
  if parsed.path.rstrip('/')=='/react-gh-pages':
   data=(root/'build/index.html').read_text().replace('</head>','<script src="/qa/axe.min.js"></script></head>');self.send_response(200);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write(data.encode());return
  super().do_GET()
 def translate_path(self,path):
  path=urllib.parse.unquote(urllib.parse.urlparse(path).path).removeprefix('/react-gh-pages/').lstrip('/')
  target=(root/'build'/path).resolve()
  if not target.is_relative_to(root/'build'):return str(root/'build/404.html')
  return str(target)
ThreadingHTTPServer(('127.0.0.1',4400),Handler).serve_forever()
