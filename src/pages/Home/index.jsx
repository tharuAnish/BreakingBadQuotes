import { useEffect, useState } from "react"
import QuoteCard from "../../components/QuoteCard"
import "./home.style.css"

export default function Home() {
  const [quote, setQuote] = useState([""])
  const [isLoading, setIsLoading] = useState(false)
  const [link, setLink] = useState(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  )

  const fetchQuote = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(link)
      const data = await res.json()
      setQuote(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [link])

  const nextQuote = () => {
    setLink = "https://api.breakingbadquotes.xyz/v1/quotes"
  }

  console.log(quote)

  return (
    <div className="wrapper">
      <div className="title">
        <img src="" alt="" />
        <h1 className="bbText">
          <span class="bb">B</span>reaking <span class="bb">B</span>ad Quotes
        </h1>
      </div>
      <div className="cardWrapper">
        {quote.length ? (
          quote.map((item, i) => (
            <QuoteCard
              key={i}
              quote={item}
              isLoading={isLoading}
              nextQuote={nextQuote}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
