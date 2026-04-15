import { useEffect, useRef } from 'react';
import './Hero.css';

const WA_LINK = "https://wa.me/2349130911276?text=Hi%20I'm%20interested%20in%20your%20products%20from%20Fynest%20Empire";

export default function Hero() {
  const r0 = useRef(null), r1 = useRef(null), r2 = useRef(null);
  const r3 = useRef(null), r4 = useRef(null), r5 = useRef(null);
  const refs = [r0, r1, r2, r3, r4, r5];

  useEffect(() => {
    refs.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = '0';
      ref.current.style.transform = i < 5 ? 'translateY(28px)' : 'translateX(28px)';
      ref.current.style.transition = 'opacity 0.85s ease, transform 0.85s ease';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translate(0)';
        }
      }, 180 + i * 130);
    });
  }, []);

  return (
    <section className="hero" id="home">
      {/* Nav is provided by StickyNav in App.jsx */}
      <div className="hero-body">
        <div className="hero-content">
          <p className="section-label hero-label" ref={r0}>New Collection 2025</p>
          <h1 className="hero-headline" ref={r1}>
            Elevate Your<br/>
            <em>Style</em> with<br/>
            Fynest Empire
          </h1>
          <p className="hero-sub" ref={r2}>
            Discover affordable luxury with our collection of stylish handbags, handcrafted slides, and quality perfumes designed for the modern woman.
          </p>
          <div className="hero-actions" ref={r3}>
            <a href="#collection" className="hero-btn-primary">Shop Collection</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat with Us
            </a>
          </div>
          <div className="hero-stats" ref={r4}>
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" ref={r5}>
          <div className="hero-img-frame">
            <img
              src="/src/Product-images/bags/DisplayStructuredBagWithWallets.png"
              alt="Fynest Empire Collection"
              className="hero-main-img"
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80';
              }}
            />
            <div className="hero-img-accent"></div>
          </div>
          <div className="hero-float-card">
            <span className="float-icon">✦</span>
            <span>Slay silently</span>
          </div>
          <div className="hero-badge">
            <span>AFFORDABLE</span>
            <span>LUXURY</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee">
        <div className="marquee-track">
          {['Handbags', '✦', 'Slides', '✦', 'Perfumes', '✦', 'Affordable Luxury', '✦', 'Fynest Empire', '✦',
            'Handbags', '✦', 'Slides', '✦', 'Perfumes', '✦', 'Affordable Luxury', '✦', 'Fynest Empire', '✦'].map((t, i) => (
            <span key={i} className={t === '✦' ? 'marquee-dot' : ''}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
