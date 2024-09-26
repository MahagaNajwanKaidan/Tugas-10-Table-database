# Sistem Manajemen Tiket Konser

Proyek ini adalah sistem manajemen tiket konser yang dibangun menggunakan **Express.js** dan **Sequelize**. Sistem ini mengelola pengguna, konser, tiket, pembayaran, dan hubungan antar entitas tersebut.

## Tabel dan Relasi

### 1. **User**
- **Deskripsi**: Menyimpan informasi tentang pengguna yang melakukan pemesanan tiket.
- **Field Penting**: `id`, `email`,`password`
- **Relasi**:
  - **User - Order**: Satu pengguna dapat memiliki banyak pesanan (`one-to-many`).

### 2. **Order**
- **Deskripsi**: Mencatat pesanan tiket yang dilakukan oleh pengguna.
- **Field Penting**: `id`, `userId`, `totalAmount`
- **Relasi**:
  - **Order - User**: Setiap pesanan terkait dengan satu pengguna.
  - **Order - Payment**: Setiap pesanan memiliki satu pembayaran (`one-to-one`).
  - **Order - OrderDetails**: Setiap pesanan memiliki beberapa detail pesanan, yang merinci tiket-tiket yang dibeli dalam satu pesanan (`one-to-many`).
  - **Order - Ticket**: Setiap pesanan memiliki banyak tiket (`one-to-many`).

### 3. **OrderDetails**
- **Deskripsi**: Menyimpan detail setiap tiket dalam pesanan, termasuk tipe tiket.
- **Field Penting**: `id`, `orderId`, `tickettypeId`, `quantity`
- **Relasi**:
  - **OrderDetails - Order**: Terkait dengan satu pesanan.
  - **OrderDetails - TicketType**: Setiap detail pesanan terkait dengan satu tipe tiket.

### 4. **Payment**
- **Deskripsi**: Mengelola informasi pembayaran terkait dengan pesanan.
- **Field Penting**: `id`, `orderId`, `paymentMethod`, `status`
- **Relasi**:
  - **Payment - Order**: Setiap pembayaran terkait dengan satu pesanan (`one-to-one`).

### 5. **TicketType**
- **Deskripsi**: Mengelola berbagai jenis tiket untuk setiap konser.
- **Field Penting**: `id`, `typeName`, `price`
- **Relasi**:
  - **TicketType - OrderDetails**: Setiap tipe tiket dapat muncul dalam banyak detail pesanan (`one-to-many`).
  - **TicketType - Ticket**: Setiap tipe tiket dapat terkait dengan banyak tiket (`one-to-many`).

### 6. **Ticket**
- **Deskripsi**: Menyimpan informasi tentang tiket yang telah dibeli.
- **Field Penting**: `id`, `orderId`, `tickettypeId`
- **Relasi**:
  - **Ticket - Order**: Setiap tiket terkait dengan satu pesanan (`many-to-one`).
  - **Ticket - TicketType**: Setiap tiket terkait dengan satu tipe tiket (`many-to-one`).

### 7. **Concert**
- **Deskripsi**: Berisi detail tentang konser yang tersedia.
- **Field Penting**: `id`, `venueId`, `concertName`, `date`
- **Relasi**:
  - **Concert - Venue**: Setiap konser diadakan di satu lokasi atau venue (`many-to-one`).
  - **Concert - ConcertArtist**: Setiap konser dapat memiliki banyak artis yang tampil (`one-to-many`).

### 8. **Venue**
- **Deskripsi**: Menyimpan informasi tentang lokasi konser.
- **Field Penting**: `id`, `venueName`, `location`
- **Relasi**:
  - **Venue - Concert**: Setiap lokasi dapat menjadi tuan rumah bagi banyak konser (`one-to-many`).

### 9. **Artist**
- **Deskripsi**: Menyimpan informasi tentang artis yang tampil dalam konser.
- **Field Penting**: `id`, `artistName`
- **Relasi**:
  - **Artist - ConcertArtist**: Setiap artis dapat tampil di beberapa konser (`one-to-many`).

### 10. **ConcertArtist**
- **Deskripsi**: Menyimpan hubungan antara konser dan artis yang tampil.
- **Field Penting**: `id`, `concertId`, `artistId`
- **Relasi**:
  - **ConcertArtist - Concert**: Menghubungkan banyak artis dengan satu konser (`many-to-one`).
  - **ConcertArtist - Artist**: Menghubungkan banyak konser dengan satu artis (`many-to-one`).

## Relasi Utama

1. **User** → **Order**: Satu pengguna dapat membuat banyak pesanan.
2. **Order** → **Payment**: Setiap pesanan memiliki satu pembayaran.
3. **Order** → **OrderDetails**: Setiap pesanan memiliki banyak detail pesanan.
4. **OrderDetails** → **TicketType**: Setiap detail pesanan memiliki satu tipe tiket.
5. **Order** → **Ticket**: Setiap pesanan memiliki banyak tiket.
6. **TicketType** → **Ticket**: Satu tipe tiket dapat terkait dengan banyak tiket.
7. **Concert** → **Venue**: Satu konser berlangsung di satu venue.
8. **Concert** → **ConcertArtist**: Satu konser bisa memiliki banyak artis yang tampil.
9. **Artist** → **ConcertArtist**: Satu artis bisa tampil di banyak konser.

## Cara Penggunaan

1. **Install Dependencies**:
   ```bash
   npm install
