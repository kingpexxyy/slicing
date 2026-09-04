# Cara Pasang Foto Produk

1. Taruh file foto kamu di folder ini (`public/images/`)
   Contoh: `cerita1.jpg`, `cerita2.jpg`, dst.

2. Buka file `data/cerita.ts`

3. Pada setiap item, isi field `foto` sesuai nama file:
   ```ts
   foto: "/images/cerita1.jpg",
   ```

4. Simpan file → foto langsung muncul di website!

## Nama file yang sudah didaftarkan di data:
- `/images/cerita1.jpg` → Tas Kulit Handmade Premium
- `/images/cerita2.jpg` → Kue Brownies Coklat Lumer
- `/images/cerita3.jpg` → Sepatu Sneakers Lokal Limited
- `/images/cerita4.jpg` → Lilin Aromaterapi Lavender

## Format foto yang didukung:
JPG, JPEG, PNG, WebP — disarankan ukuran minimal 800x600px
