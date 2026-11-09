import http from "http";

const students = [
  { name: "Emir", id: 1 },
  { name: "Bayel", id: 2 },
  { name: "Elkhan", id: 3 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return res.end("Hello world, It's Emir's Server");
  } else if (req.url === "/students" && req.method === "GET") {
    return res.end("Hello students");
  }
});
const port = 5000

server.listen(port, () => {
  console.log(`server is on ${port}`);
});
