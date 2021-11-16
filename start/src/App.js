import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="page" element={<Page />} />
          <Route path="musiquinha" element={<Musiquinha />} />
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2 className="Header">Oi,</h2>
        <p>Se você se chama Marcela Reis e é fã da Taylor, por favor</p>
      </main>
      <nav className='box'>
        <Link className="App-link" to="/about">Clique Aqui!</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main video width="1000" height="1000" controls>
        <h2>Primeiramente, o que é "vermelho"?</h2>
        <p className='text'>
          Quando olhamos para um objeto da cor vermelha, a coloração não está no objeto! 
          A cor é refletida quando é iluminado por uma luz branca, e a luz branca
          absorve todas as cores expondo o vermelho. Essa luz chega aos nossos olhos e passa pela íris,
          que regula a quantidade de luz que recebemos na pupila. E assim a gente vê as cores. Legal né?
        </p>
      </main>

      <nav>
        <Link to="/">Voltar</Link>
        <Link to="/Page">Avançar</Link>
      </nav>
    </>
  );
}

function Page() {
  return (
    <>
      <main>
        <p>Agora que sabemos mais sobre a cor, vamos a loira...</p>
      </main>
      <nav>
        <Link to="/About">Voltar</Link>
        <Link to="/Musiquinha">Avançar</Link>
      </nav>
    </>
  );
}

function Musiquinha() {
  return (
    <>
      <main>
        <p>sdaosid</p>
        <iframe 
        width="853" 
        height="480" 
        src="https://www.youtube.com/embed/tollGa3S0o8" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
        >

        </iframe>
      

      </main>
      <nav>
        <Link to="/Page">Voltar</Link>
      </nav>
    </>
  );
}
   

export default App;