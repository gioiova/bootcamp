import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col md:flex-row mx-auto justify-center gap-6 p-6 pt-28 md:pt-20">
        <Card />
        <Card />
        <Card />
        
      </main>
    </>
  )
}

export default App
