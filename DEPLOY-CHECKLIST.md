# ⚡ Quick Deploy Checklist

## 🎯 Pre-Deploy (5 menit)

### 1. Test Build Lokal
```bash
npm run build
npm run preview
```
✅ Buka http://localhost:4173 dan cek:
- [ ] Semua images muncul
- [ ] Navigation works
- [ ] Contact form berfungsi
- [ ] No console errors

### 2. Push ke GitHub
```bash
git add .
git commit -m "Ready for production"
git push origin main
```

## 🚀 Deploy ke Vercel (2 menit)

### Via Website (Recommended)
1. **Login:** https://vercel.com
2. **Import:** Add New → Project → Import GitHub repo
3. **Configure:** 
   - Framework Preset: Vite ✅ (auto-detect)
   - Build Command: `npm run build` ✅ (auto)
   - Output Directory: `dist` ✅ (auto)
4. **Deploy:** Klik Deploy
5. **Done!** 🎉

### Via CLI (Alternative)
```bash
# Install
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## ❓ FAQ - Vercel Deploy

### Q: Apakah perlu pindah images dari `src/assets/` ke `public/`?
**A: TIDAK!** ❌
- Vite otomatis bundle & optimize images dari `src/assets/`
- Hanya favicon yang perlu di `public/` (sudah ada ✅)

### Q: Images tidak muncul setelah deploy?
**A:** Cek path di `data.js` harus:
```javascript
// ✅ BENAR
image: '/src/assets/images/projects/Greenify.png'

// ❌ SALAH
image: './assets/images/projects/Greenify.png'
```

### Q: Build error di Vercel?
**A:** 
1. Test build lokal dulu: `npm run build`
2. Pastikan `package.json` ada scripts:
   ```json
   "scripts": {
     "build": "vite build"
   }
   ```

### Q: Perlu environment variables?
**A:** TIDAK untuk project ini ✅

### Q: Perlu file `vercel.json`?
**A:** TIDAK, Vercel auto-detect Vite ✅

## 🎊 After Deploy

### Update Links
- [ ] Update URL di LinkedIn profile
- [ ] Update URL di GitHub profile
- [ ] Update URL di resume/CV
- [ ] Share di social media

### Custom Domain (Optional)
Project Settings → Domains → Add Domain

---

## 🆘 Need Help?

1. **Build Error:** Check `npm run build` locally
2. **Image Issue:** Verify paths in `src/lib/data.js`
3. **Deployment Issue:** Check Vercel logs di dashboard

📖 **Full Guide:** [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)

---

**Total Time:** ~7 minutes from push to live! ⚡
