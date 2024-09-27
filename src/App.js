import './style/App.css';

import NavigationRoutes from './components/NavigationRoutes.js';
import Header from './components/header/Header.js';
// import { useState } from 'react';

function App() {

  // const [user, setUser] = useState(
  //   {
  //     nom: null,
  //     prenom: null,
  //     // nomInterlocuteur: "John Doe", 
  //     nomInterlocuteur: null,
  //     cursus: null,
  //     contrat: null,
  //     motif: null
  //   }
  // );

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
