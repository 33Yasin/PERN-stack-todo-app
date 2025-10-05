# Minimalistic Todo App

Basit bir full-stack Todo uygulaması. Backend Express + PostgreSQL, frontend React + Vite + TailwindCSS kullanır.

<img width="374" height="818" alt="fullstack todo app" src="https://github.com/user-attachments/assets/49428c3c-0c15-4014-8948-9627fd4c6317" />

## Hızlı Başlangıç

1. Backend
   - Kök dizinde `backend` klasörüne girin:
     ```sh
     cd backend
     npm install
     ```
   - PostgreSQL veritabanı oluşturun ve  içindeki  ile eşleştirin.
   - Sunucuyu başlatın:
     ```sh
     node server.js
     # veya geliştirme için nodemon yüklü ise
     npx nodemon server.js
     ```

2. Frontend
   - Yeni terminalde  klasörüne girin:
     ```sh
     cd frontend
     npm install
     npm run dev
     ```
   - Tarayıcıda `http://localhost:5173` açın (vite varsayılan).


## API (Özet)

- GET /api/todos — Tüm görevleri döner
- POST /api/todos — Yeni görev oluşturur (body: { title })
- PUT /api/todos/:id — Görevi günceller (body: { completed })
- DELETE /api/todos/:id — Görevi siler

## Notlar

- Backend  içinde örnek olarak konfigüre edilmiş:   
- Frontend API taban adresi  dosyasında `http://localhost:5000` olarak ayarlı; backend portu  içindeki  ile eşleşmelidir.

Katkı veya hata raporu için repository üzerine issue açabilirsiniz.
