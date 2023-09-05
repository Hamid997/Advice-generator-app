import './App.css'
import Quote from "./components/QuoteCard"

function App() {

  return (
    <>
      <section>
        <Quote />

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer"  >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/hamid997" target="_blank" rel="noopener noreferrer"  >
            Abdelhamid Birouk
          </a>
          .
        </div>
      </section>
    </>
  )
}

export default App
