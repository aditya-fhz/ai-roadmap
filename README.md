# AI Engineer — 90-Day Learning Path

Website roadmap belajar AI Engineer berbahasa Indonesia. Desain diperbarui dengan tampilan editorial yang responsif, dashboard progress, dan navigasi kurikulum.

## Menjalankan
1. Ekstrak file ZIP.
2. Buka `index.html` di browser.
3. Alternatif: jalankan `python -m http.server` dari folder proyek, lalu buka `http://localhost:8000`.

Tidak memerlukan instalasi dependency atau proses build. Koneksi internet hanya diperlukan untuk memuat Google Fonts; website tetap dapat digunakan dengan font fallback saat offline.

## Fitur
- Kurikulum 90 hari dalam 6 fase.
- Pencarian materi dan filter berdasarkan fase.
- Tampilan grid dan list/timeline.
- Checklist hari selesai dan progress otomatis tersimpan melalui `localStorage`.
- Lanjut otomatis ke hari berikutnya yang belum selesai.
- Salin ringkasan progress.
- Mode terang/gelap.
- Layout responsif untuk desktop, tablet, dan ponsel.

## Struktur
```text
roadmap-ai-engineer/
├── index.html
├── README.md
└── assets/
    ├── css/style.css
    └── js/app.js
```

## Kustomisasi
- Konten halaman dan bagian informasi: `index.html`
- Warna, layout, dan responsive breakpoints: `assets/css/style.css`
- Data 90 hari, fase, serta interaksi: `assets/js/app.js`

Progress disimpan secara lokal di browser/perangkat yang digunakan dan tidak disinkronkan ke perangkat lain.
