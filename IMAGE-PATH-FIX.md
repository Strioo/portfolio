# 🔧 Image Path Fix for Production

## Masalah yang Terjadi
Saat deploy ke Vercel, images tidak muncul karena Vite tidak dapat resolve path `/src/assets/images/` di production build.

## Solusi ✅

### 1. Pindahkan Images ke Public Folder
Semua images dipindahkan dari `src/assets/images/` ke `public/images/`:

```
public/
└── images/
    ├── my-photo-hero-section.png
    ├── certificates/
    │   ├── digiup.jpg
    │   ├── oracle.jpg
    │   └── umk-itfest.jpg
    └── projects/
        ├── Greenify.png
        ├── RuangNusantara.png
        ├── Webdesa-baturaden.png
        ├── Inxora.png
        └── DevAcademy.png
```

### 2. Update Semua Path References

#### **src/lib/data.js**
```javascript
// ❌ BEFORE (tidak work di production)
image: '/src/assets/images/projects/Greenify.png'
image: '/src/assets/images/certificates/digiup.jpg'

// ✅ AFTER (work di production & development)
image: '/images/projects/Greenify.png'
image: '/images/certificates/digiup.jpg'
```

#### **src/components/sections/hero/HeroStatsCard.jsx**
```javascript
// ❌ BEFORE
src="/src/assets/images/my-photo-hero-section.png"

// ✅ AFTER
src="/images/my-photo-hero-section.png"
```

---

## Penjelasan Teknis

### Mengapa Perlu di Public?

1. **Development vs Production:**
   - Development: Vite dev server dapat resolve `/src/` paths
   - Production: Static build tidak memiliki `/src/` di runtime

2. **Public Folder Behavior:**
   - Files di `public/` dicopy as-is ke `dist/` saat build
   - Path references tetap sama (`/images/...`)
   - Accessible di production tanpa bundling

3. **Best Practice Vite:**
   - Assets yang di-import di code → `src/assets/`
   - Assets yang di-reference by URL → `public/`

---

## Cara Verifikasi

### Local Test:
```bash
# Build production
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173
# Check semua images muncul
```

### Production (Vercel):
1. Push ke GitHub
2. Vercel auto-deploy
3. Check live URL
4. Verify images loading

---

## File Structure (Final)

```
frontend-portfolio/
├── public/
│   ├── Inxora_logo_bg-dark.svg    # Favicon
│   └── images/                     # All portfolio images
│       ├── my-photo-hero-section.png
│       ├── certificates/
│       │   ├── digiup.jpg
│       │   ├── oracle.jpg
│       │   └── umk-itfest.jpg
│       └── projects/
│           ├── Greenify.png
│           ├── RuangNusantara.png
│           ├── Webdesa-baturaden.png
│           ├── Inxora.png
│           └── DevAcademy.png
│
├── src/
│   ├── assets/                     # Other assets (icons, etc)
│   │   └── icons/
│   ├── components/
│   └── lib/
│       └── data.js                 # Updated with /images/ paths
│
└── dist/                           # Build output (after npm run build)
    ├── index.html
    ├── Inxora_logo_bg-dark.svg
    ├── images/                     # Copied from public/
    └── assets/                     # Bundled JS/CSS
```

---

## Checklist Deploy

- [x] Images moved to `public/images/`
- [x] All paths updated in `data.js`
- [x] Hero photo path updated in `HeroStatsCard.jsx`
- [x] Build test passed (`npm run build`)
- [x] Committed and pushed to GitHub
- [ ] Verify on Vercel production URL
- [ ] Check all images loading
- [ ] Test on mobile/tablet

---

## Troubleshooting

### Images masih tidak muncul?

1. **Clear browser cache:**
   ```
   Ctrl + Shift + R (Windows/Linux)
   Cmd + Shift + R (Mac)
   ```

2. **Check Vercel deployment logs:**
   - Pastikan build success
   - Check tidak ada error di logs

3. **Verify path case-sensitivity:**
   - Linux/Vercel case-sensitive
   - Pastikan nama file exact match

4. **Check image file extensions:**
   - `.png` bukan `.PNG`
   - `.jpg` bukan `.jpeg`

---

## Reference Commands

```bash
# Copy images to public (PowerShell)
New-Item -ItemType Directory -Force -Path "public\images", "public\images\projects", "public\images\certificates"
Copy-Item "src\assets\images\projects\*.png" -Destination "public\images\projects\"
Copy-Item "src\assets\images\certificates\*.jpg" -Destination "public\images\certificates\"
Copy-Item "src\assets\images\my-photo-hero-section.png" -Destination "public\images\"

# Build & test
npm run build
npm run preview

# Deploy
git add .
git commit -m "Fix: Move images to public folder for production"
git push origin main
```

---

**Status:** ✅ Fixed and deployed

**Last Updated:** December 17, 2025
