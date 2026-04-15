import './QuoteTicker.css';

const QUOTES = [
  "Slay silently, let your bag do the talking",
  "Bags aren't just accessories, they're personality",
  "Bags are like chips, you can't have just one.",
  "Bags!! because pockets are never enough.",
];

const SEPARATOR = "✦";

export default function QuoteTicker() {
  const items = [...QUOTES, ...QUOTES];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((quote, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-sep">{SEPARATOR}</span>
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
}
