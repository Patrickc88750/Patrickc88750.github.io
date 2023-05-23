import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("serving at port", PORT)

def stop_server():
    httpd.shutdown()

httpd.serve_forever()

# Call stop_server() function to stop the server
stop_server()
