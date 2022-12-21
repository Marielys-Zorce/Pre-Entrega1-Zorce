import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';




function App() {
  const torta = {
    Descripcion: "Torta de Chocolate",
    Precio: "$ 16.000",
    Img: "../IMG3.jpg",


  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer Descripcion={torta.Descripcion} Precio={torta.Precio} Img={torta.Img} />

    </div>
  );
}

export default App;
