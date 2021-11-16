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
        <p>Insira sua mensagem aqui...</p>
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
        <h2 className="Header">Primeiramente, o que é "vermelho"?</h2>
        <p className='text'>
          Insira sua mensagem aqui...<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
          Insira sua mensagem aqui...  <br /> Insira sua mensagem aqui...
          Insira sua mensagem aqui...<br />  Insira sua mensagem aqui...
          Insira sua mensagem aqui... <br /> Insira sua mensagem aqui... <br />Insira sua mensagem aqui...
        </p>
      </main>

      <nav className='box'>
        <Link className="App-link" to="/Page">Avançar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/">Voltar</Link>
      </nav>
    </>
  );
}

function Page() {
  return (
    <>
      <main>
        <p className="Header">Insira sua mensagem aqui...</p>
      </main>
      <nav className='box'>
        <Link className="App-link" to="/Musiquinha">Avançar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/About">Voltar</Link>
      </nav>
    </>
  );
}

function Musiquinha() {
  return (
    <>
      <main>
        <h2 className="Header"> Isso ainda é um cartão?</h2>

        <iframe className='video'
        width="853" 
        height="480" 
        src="https://www.youtube.com/embed/tollGa3S0o8" // esse é o código incorporado do vídeo, para você utilizar qualquer vídeo. Entre no youtube, clique com o botão direito no vídeo e "copiar código incorporado".
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture">
        </iframe>
        <p className='text1'>  Insira sua mensagem aqui...<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
          Insira sua mensagem aqui...  <br /> Insira sua mensagem aqui...
          Insira sua mensagem aqui...<br />  Insira sua mensagem aqui...
          Insira sua mensagem aqui... <br /> Insira sua mensagem aqui... <br />Insira sua mensagem aqui...
          <br /><br />
          Me siga nas redes sociais e me marca se você fez!! <br />
          Twitter: @aryzete_ <br />
          Instagram: @aryzete_ <br />
          Twitch: @aryzete <br />
          GitHub: @aryniceia <br />
        </p>
      

      </main>
      <nav className='box' >
        <Link className="App-link" to="/Page">Voltar</Link>
      </nav>
    </>
  );
}
   
export default App;