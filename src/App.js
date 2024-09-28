import './style/App.css';

import NavigationRoutes from './components/NavigationRoutes.js';
import Header from './components/header/Header.js';

function App() {

  let user = { nom: null, prenom: null, nomInterlocuteur: null, cursus: null, contrat: null, motif: null };

  const dataUs = JSON.parse(localStorage.getItem("user"))

  if (!dataUs) {
    localStorage.setItem("user", JSON.stringify(user))
  }


  return (
    <>
      <div className="App">

        <header className="App-header">

          <Header />

        </header>

        <main className='mainContainer'>

          {/* Function pour gérer les routes */}
          <NavigationRoutes />

        </main>

      </div>

    </>
  )

}

export default App;
