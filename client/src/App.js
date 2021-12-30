import './App.css';
import {Router} from '@reach/router';
import NewPet from './components/NewPet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';


function App() {

  

  return (
    <div className="App">
      <Router>
        <AllPets  path="/" />
        <OnePet  path="/one/:id" />
        <NewPet path="/new" />
        <EditPet path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
