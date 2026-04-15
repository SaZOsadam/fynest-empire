import { useState } from 'react';
import './Products.css';

const WA_LINK = "https://wa.me/2349130911276?text=Hi%20I'm%20interested%20in%20your%20products%20from%20Fynest%20Empire";

const CATEGORIES = ['All', 'Handbags', 'Slides', 'Perfumes'];

const PRODUCTS = [
  // Handbags
  { id: 1, name: 'Structured Bag', category: 'Handbags', img: '/src/Product-images/bags/StructuredBag.jpg', tag: 'Bestseller' },
  { id: 2, name: 'Leather Bag', category: 'Handbags', img: '/src/Product-images/bags/LeatherBag.jpg', tag: null },
  { id: 3, name: 'Mini YSL Bag', category: 'Handbags', img: '/src/Product-images/bags/Wallet.jpg', tag: 'New' },
  { id: 4, name: 'Shoulder Bag', category: 'Handbags', img: '/src/Product-images/bags/ShoulderBag.jpg', tag: 'Popular' },
  { id: 5, name: 'Clutch Bag', category: 'Handbags', img: '/src/Product-images/bags/ClutchBag.jpg', tag: null },
  { id: 6, name: 'Chic Tote', category: 'Handbags', img: '/src/Product-images/bags/ChicTote1.jpg', tag: 'New' },
  { id: 7, name: 'Chain Bag', category: 'Handbags', img: '/src/Product-images/bags/ChainBag.jpg', tag: 'Limited'},
  { id: 8, name: 'Mini Crossbody', category: 'Handbags', img: '/src/Product-images/bags/MiniCrossbody.jpg', tag: null },
  { id: 9, name: 'Quilted Bag', category: 'Handbags', img: '/src/Product-images/bags/QuiltedBag.jpg', tag: null },
  // Slides
  { id: 10, name: 'Embellished Slides', category: 'Slides', img: '/src/Product-images/Slides/SlideProduct1.jpg', tag: 'Handcrafted' },
  { id: 11, name: 'Strap Slides', category: 'Slides', img: '/src/Product-images/Slides/SlideProduct2.jpg', tag: 'New' },
  { id: 12, name: 'Platform Slides', category: 'Slides', img: '/src/Product-images/Slides/SlideProduct3.jpg', tag: null },
  // Perfumes
  { id: 13, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct1.jpg', tag: 'Bestseller' },
  { id: 14, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct2.jpg', tag: 'New' },
  { id: 15, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct3.jpg', tag: null },
  { id: 16, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct4.jpg', tag: 'Popular' },
  { id: 17, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct5.jpg', tag: null },
  { id: 18, category: 'Perfumes', img: '/src/Product-images/perfumes/perfumesProduct6.jpg', tag: null },

];

const FALLBACKS = {
  Handbags: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
  Slides: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80',
  Perfumes: '/src/Product-images/perfumes/perfumesProduct5.jpg',
};

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <section className="products" id="collection">
      <div className="products-header">
        <p className="section-label">What We Offer</p>
        <h2 className="products-title">Our Collection</h2>
        <p className="products-sub">Carefully selected pieces to complement your everyday style and special moments.</p>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filtered.map(product => {
          const isComingSoon = product.category === 'Slides';
          const CardTag = isComingSoon ? 'div' : 'a';
          const linkProps = isComingSoon
            ? {}
            : { href: WA_LINK, target: '_blank', rel: 'noopener noreferrer' };

          return (
            <CardTag
              key={product.id}
              {...linkProps}
              className={`product-card${isComingSoon ? ' product-card--soon' : ''}`}
            >
              <div className="product-img-wrap">
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                  onError={e => { e.target.src = FALLBACKS[product.category]; }}
                />
                {isComingSoon ? (
                  <div className="coming-soon-overlay">
                    <span className="coming-soon-label">Coming Soon</span>
                  </div>
                ) : (
                  <div className="product-overlay">
                    <span className="product-cta-text">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Order on WhatsApp
                    </span>
                  </div>
                )}
              </div>
              <div className="product-info">
                <span className="product-cat">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
              </div>
            </CardTag>
          );
        })}
      </div>

      <div className="products-cta">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
