import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemListContainer';




function App() {
  return (


<div>
<NavBar/>
<ItemlistContainer greeting='BIENVENIDO AL LANDING DE LA TIENDA'/>
</div>
    );
}

export default App;
