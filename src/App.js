import './style/App.css';

import NavigationRoutes from './components/NavigationRoutes.js';
import Header from './components/header/Header.js';
import { UserDataProvider } from './context/UserContext.js';
import { StoryDataProvider } from './context/StoryContext.js';
import { ContextDataProvider } from './context/Context.js';

// import Formulaire from './Formulaire';

function App() {

  return (
    <>

      {/* <UserDataProvider>
        <StoryDataProvider> */}

        <ContextDataProvider>
          <div className="App">

            <header className="App-header">

              <Header />

            </header>

            <main className='mainContainer'>

              {/* Function pour gérer les routes */}
              <NavigationRoutes />

            </main>

          </div>
          
          </ContextDataProvider>
        {/* </StoryDataProvider>
      </UserDataProvider> */}


    </>
  )

}

export default App;
