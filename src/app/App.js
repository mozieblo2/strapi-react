import Restaurants from '../components/restaurants/Restaurants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn React with Strapi
        </p>
      </header>
      <main>
        <Restaurants />
      </main>
    </div>
  );
}

export default App;
