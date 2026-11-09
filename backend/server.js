const http = require("http");
const handleDelete = require("../backend/methods/handle-delete");
const handleGet = require("../backend/methods/handle-get");
const handleNotFound = require("../backend/methods/handle-not-found");
const handlePost = require("../backend/methods/handle-post");
const handlePut = require("../backend/methods/handle-put");
const handleOptions = require("../backend/methods/handle-options");

// 1) sunucuyu oluştur
const server = http.createServer((req, res) => {
  console.log(`Gelen istek: ${req.method} | url: ${req.url}`);

  // gönderilen cevabın veri tipini json olduğunu header'a ekle
  res.setHeader("Content-Type", "application/json");

  // cors hatalarını engellemek için gerekli header (GET)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // istek /movies adresine atılmadıysa 404 döndür
  if (!req.url.startsWith("/movies")) return handleNotFound(req, res);

  // istek methoduna göre fonksiyon çalıştır
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    case "POST":
      return handlePost(req, res);
    case "PUT":
      return handlePut(req, res);
    case "DELETE":
      return handleDelete(req, res);
    case "OPTIONS":
      return handleOptions(req, res);
    default:
      handleNotFound(req, res);
  }
});

// 2) API'in çalışacağı portu belirle
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`API ${PORT}. portunda çalışıyor`);
});
