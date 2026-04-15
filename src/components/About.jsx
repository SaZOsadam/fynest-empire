import './About.css';
import { assetUrl } from '../utils/assetUrl';

const WA_LINK = "https://wa.me/2349130911276?text=Hi%20I'm%20interested%20in%20your%20products%20from%20Fynest%20Empire";

const WHY_POINTS = [
  {
    icon: '✦',
    title: 'Affordable Luxury',
    desc: 'Stylish products at prices you\'ll love.'
  },
  {
    icon: '◈',
    title: 'Quality You Can Trust',
    desc: 'Carefully crafted and selected for durability and elegance.'
  },
  {
    icon: '◉',
    title: 'Unique Style',
    desc: 'Stand out with designs that reflect your personality.'
  },
  {
    icon: '◇',
    title: 'Customer Satisfaction',
    desc: 'We prioritize your happiness with every purchase.'
  },
];

const GALLERY_IMGS = [
  assetUrl('Product-images/bags/StructuredBag.jpg'),
  assetUrl('Product-images/perfumes/perfumesProduct1.jpg'),
  assetUrl('Product-images/bags/LeatherBag.jpg'),
  assetUrl('Product-images/perfumes/perfumesProduct2.jpg'),
  assetUrl('Product-images/bags/ShoulderBag.jpg'),
  assetUrl('Product-images/perfumes/perfumesProduct3.jpg'),
  assetUrl('Product-images/bags/ChicTote1.jpg'),
  assetUrl('Product-images/perfumes/perfumesProduct4.jpg'),
];

const FALLBACKS_G = [
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
  'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
  'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&q=80',
  'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80',
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80',
  'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80',
  'https://images.unsplash.com/photo-1558171813-0a9e562f4f52?w=600&q=80',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
];

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img-col">
          <div className="about-img-stack">
            <img
              src={assetUrl('Product-images/bags/DisplaybagProduct1.jpg')}
              alt="Fynest Empire"
              className="about-img about-img-main"
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80'; }}
            />
            <img
              src={assetUrl('Product-images/bags/DisplayStructuredBagWithWallets.png')}
              alt="Fynest Empire Handbags"
              className="about-img about-img-secondary"
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffbb4e8a8f0?w=400&q=80'; }}
            />
            <div className="about-gold-block">
              <span className="about-gold-num">5★</span>
              <span className="about-gold-label">Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">Our Story</p>
          <h2 className="about-title">About Fynest Empire</h2>
          <p className="about-text">
            At Fynest Empire, we believe every woman deserves to feel confident and stylish.
            We offer a curated range of fashionable handbags, handcrafted slides, and quality
            perfumes designed to complement every look.
          </p>
          <p className="about-text">
            Our mission is to provide affordable luxury without compromising on quality,
            making every customer feel special.
          </p>
          <div className="about-signature">
            <div className="sig-line"></div>
            <span>— Fynest Empire</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <div className="why-header">
          <p className="section-label">Our Promise</p>
          <h2 className="why-title">Why Choose Us</h2>
        </div>
        <div className="why-grid">
          {WHY_POINTS.map((pt, i) => (
            <div key={i} className="why-card">
              <span className="why-icon">{pt.icon}</span>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <div className="gallery-header">
          <p className="section-label">Visual Lookbook</p>
          <h2 className="gallery-title">Explore Our Styles</h2>
          <p className="gallery-sub">Take a closer look at our latest collections and find your perfect match.</p>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMGS.map((src, i) => (
            <a
              key={i}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item gallery-item-${i}`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                onError={e => { e.target.src = FALLBACKS_G[i % FALLBACKS_G.length]; }}
              />
              <div className="gallery-hover">
                <span>Order This</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
