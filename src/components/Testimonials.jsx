import './Testimonials.css';

const REVIEWS = [
  { name: 'Chisom A.', text: 'I ordered the structured bag and got so many compliments. Quality is amazing for the price!' },
  { name: 'Blessing O.', text: 'The perfume smells absolutely divine. Packaging was neat and delivery was fast. 10/10!' },
  { name: 'Temi R.', text: 'Both bags arrived looking exactly like the pictures. WhatsApp service was so friendly!' },
  { name: 'Adaeze N.', text: 'Best affordable luxury in Nigeria. My chain bag is stunning — everyone asks where I got it!' },
  { name: 'Fatima K.', text: 'Quick response, smooth ordering, and the bag is everything I wanted. Fynest Empire is the real deal.' },
];

const STARS = '★★★★★';
const SEP = '◈';

export default function Testimonials() {
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <div className="reviews-ticker-wrap" aria-label="Customer reviews">
      <div className="reviews-ticker-track">
        {items.map((r, i) => (
          <span key={i} className="reviews-ticker-item">
            <span className="reviews-ticker-sep">{SEP}</span>
            <span className="reviews-ticker-stars">{STARS}</span>
            <span className="reviews-ticker-text">{r.text}</span>
            <span className="reviews-ticker-name">— {r.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
