import './style/App.css';

import Choose from './story/Choose.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navigation from './Navigation.js';
import Template from './Template.js';

// import Formulaire from './Formulaire';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template/>
  },

  {
    path: '/etape0',
    element: <Choose index={0} />
  },
  {
    path: '/etape1',
    element: <Choose index={1} />
  },
  {
    path: '/etape2',
    element: <Choose index={2} />
  },

  {
    path: '/etape3',
    element: <Choose index={3} />
  },

  {
    path: '/etape4',
    element: <Choose index={4} />
  },

  {
    path: '/etape5',
    element: <Choose index={5} />
  },

]);



function App() {

  return <RouterProvider router={router} />;
}

export default App;
