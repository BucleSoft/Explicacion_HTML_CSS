import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import logo from './media/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li>
            <img src={logo} alt="imagen" class="logo" />
          </li>
          <li>
            <button class="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza" />
              <i class="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li><button class="botonGenerico secondaryButton">Login</button></li>
          <li><button class="botonGenerico mainButton">Registro</button></li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <li class="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="Border Collie" />
              </div>
              <span className="breedTitle">Border Collie </span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={rhodesian} alt="Border Collie" />
              </div>
              <span className="breedTitle">Rhodesian</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
