# CSS Kararları

## 1) Breakpoint Seçimi
Bu projede responsive tasarım için tablet ve mobil kırılımlarını hedefleyerek iki temel breakpoint kullandım:
- ≤1024px: Proje kartlarını 3 kolondan 2 kolona düşürmek (tablet).
- ≤768px: Navigasyonu dikey hale getirmek ve grid’i 1 kolona düşürmek (mobil).
Bu değerler içerik taşmasını önlemek ve deneyimi optimize etmek için seçildi.

## 2) Layout Tercihleri
Navigation menüsünü **Flexbox** ile yatayda hizaladım çünkü esnek düzen sağlar ve küçük ekranlarda dikey yığılıma güzel uyum sağlar.  
Projeler bölümünde **CSS Grid** kullanmayı tercih ettim; kolon sayısını ekran genişliğine göre kolayca değiştirmek için grid en uygundur.

## 3) Design Tokens Kullanımı
Renk, spacing, radius, shadow ve tipografi gibi tasarım değerlerini merkezi bir yerde tanımlamak için `src/styles/tokens.css` dosyasını kullandım.  
Bu sayede tutarlı tasarım dili ve kolay bakım sağladım (`var(--...)` değişkenleri tüm stylesheet’te kullanıldı).

## 4) Responsive Stratejiler ve Erişilebilirlik
Tipografi için `clamp()` kullanarak akışkan (fluid) font boyutları tanımladım, böylece metinler farklı ekranlarda daha okunabilir oldu.  
Erişilebilirlik için skip-link, klavye focus stilleri ve form label ilişkilerini korudum; Lighthouse Accessibility skorunun yüksek olması bundan kaynaklanır.