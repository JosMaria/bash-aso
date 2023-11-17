import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './Layout';
import { StatusPage } from './pages/StatusPage';
import { ConfigurationPage } from './pages/ConfigurationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='status' element={<StatusPage />} />
      <Route path='configuration' element={<ConfigurationPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
