import "./quotecard.style.css"

export default function QuoteCard({ quote, nextQuote }) {
  return (
    <div className="card">
      <form>
        <h3 className="quote">"{quote.quote}"</h3>
        <p className="author"> - {quote.author}</p>
        <button onClick={() => nextQuote} className="cardButton">
          NextQuote
        </button>
      </form>
    </div>
  )
}
