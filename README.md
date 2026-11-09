# 🎬 Fullstack Movie App

Filmleri listeleyebildiğiniz, arayabildiğiniz, detaylarını görüntüleyebildiğiniz, yeni film ekleyip silebildiğiniz fullstack bir film uygulaması. Frontend **React** ile, backend ise herhangi bir framework kullanılmadan **saf Node.js** ile geliştirilmiştir.

## 📖 Proje Hakkında

Bu projenin amacı, Express gibi bir framework kullanmadan Node.js'in yerleşik `http` modülüyle bir REST API'nin nasıl yazıldığını öğrenmek ve bu API'yi modern bir React arayüzüyle kullanmaktır.

- İstekler, method'una (GET, POST, PUT, DELETE, OPTIONS) göre ilgili fonksiyona yönlendirilir.
- İstek gövdesi (body), parça parça (chunk) gelen veriler birleştirilerek elle okunur.
- Veriler bir veritabanı yerine `backend/data/movies.json` dosyasında saklanır.

## ✨ Özellikler

- 🎞️ Tüm filmleri kart görünümünde listeleme
- 🔍 Film adına göre arama
- 📄 Film detay sayfası (süre, puan, yıl, dil, oyuncular, türler, yönetmen)
- ➕ Form üzerinden yeni film ekleme
- 🗑️ Film silme
- ✅ Gelen verinin backend tarafında doğrulanması (eksik alanlar listelenerek `400` döner)
- 🆔 Her yeni filme `crypto.randomUUID()` ile benzersiz id atanması
- 🌐 CORS desteği
- ⏳ Yükleniyor ve hata durumları, toast bildirimleri

## 🛠️ Kullanılan Teknolojiler

**Frontend**
- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TanStack React Query](https://tanstack.com/query)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Lucide React](https://lucide.dev/)

**Backend**
- [Node.js](https://nodejs.org/) (`http`, `fs`, `crypto` modülleri)
- [Nodemon](https://nodemon.io/)

## 📁 Proje Yapısı

```
fullstack-movie/
├── backend/
│   ├── data/
│   │   └── movies.json        # Film verileri
│   ├── methods/               # Her HTTP method'u için handler'lar
│   │   ├── handle-get.js
│   │   ├── handle-post.js
│   │   ├── handle-put.js
│   │   ├── handle-delete.js
│   │   ├── handle-options.js
│   │   └── handle-not-found.js
│   ├── utils/
│   │   ├── body-parser.js     # İstek gövdesini okur
│   │   └── validate-data.js   # Zorunlu alanları kontrol eder
│   └── server.js              # Sunucu ve yönlendirme
│
└── frontend/
    └── src/
        ├── components/        # Header, Loader, Error, Input, DeleteButton
        ├── pages/             # Home, Detail, Form
        ├── service/api.js     # Axios ayarları
        ├── utils/constants.js
        └── App.jsx            # Sayfa yönlendirmeleri
```

## 🚀 Kurulum ve Çalıştırma

**1. Projeyi klonlayın**
```bash
git clone <repo-url>
cd fullstack-movie
```

**2. Backend'i başlatın**
```bash
cd backend
npm install
npm run dev
```
API `http://localhost:5000` adresinde çalışır.

> ⚠️ Backend'i mutlaka `backend/` klasörünün içinden başlatın. Veriler `./data/movies.json` göreli yoluyla okunduğu için başka bir klasörden çalıştırıldığında dosya bulunamaz.

**3. Frontend'i başlatın** (yeni bir terminalde)
```bash
cd frontend
npm install
npm run dev
```
Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

## 🔌 API Endpoint'leri

| Method   | URL            | Açıklama                      | Başarılı Yanıt |
| -------- | -------------- | ----------------------------- | -------------- |
| `GET`    | `/movies`      | Tüm filmleri getirir          | `200`          |
| `GET`    | `/movies/:id`  | Belirtilen id'li filmi getirir | `200`          |
| `POST`   | `/movies`      | Yeni film oluşturur           | `201`          |
| `PUT`    | `/movies/:id`  | Belirtilen filmi günceller    | `200`          |
| `DELETE` | `/movies/:id`  | Belirtilen filmi siler        | `204`          |

`/movies` dışındaki adreslere veya bulunamayan id'lere yapılan istekler `404` döner.

## 📝 Örnek İstek Gövdesi

`POST` ve `PUT` isteklerinde aşağıdaki 10 alanın tamamı zorunludur. `id` alanı sunucu tarafından oluşturulur.

```json
{
  "title": "Inception",
  "year": "2010",
  "genre": ["Aksiyon", "Bilim Kurgu", "Gerilim"],
  "rating": "8.8",
  "description": "Bir hırsız, kurumsal sırları bilinçaltı yoluyla çalmak için rüya paylaşım teknolojisini kullanır.",
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  "duration": "2s 28dk",
  "language": "İngilizce",
  "image": "https://placehold.co/300x450?text=Inception"
}
```

## 📸 Ekran Görüntüleri

<!-- Ekran görüntülerinizi örneğin bir "screenshots" klasörüne ekleyip aşağıdaki satırları düzenleyin:
![Ana Sayfa](screenshots/home.png)
![Detay Sayfası](screenshots/detail.png)
![Film Ekleme](screenshots/create.png)
-->

---

## 🌍 English Summary

**Fullstack Movie App** is a movie management application built with a **React** frontend and a **pure Node.js** backend, written without any framework such as Express.

- **Features:** list all movies, search by title, view movie details, add new movies through a form, and delete movies.
- **Backend:** a REST API built with Node.js's native `http` module. Requests are routed by HTTP method, request bodies are parsed manually from incoming chunks, incoming data is validated, and movies are stored in a JSON file (`backend/data/movies.json`). Endpoints: `GET /movies`, `GET /movies/:id`, `POST /movies`, `PUT /movies/:id`, `DELETE /movies/:id`.
- **Frontend:** React 19, Vite, Tailwind CSS v4, TanStack React Query, Axios, React Router, and React Toastify.
- **Getting started:** run `npm install` and `npm run dev` in the `backend` folder (API on port `5000`), then do the same in the `frontend` folder (app on port `5173`).
