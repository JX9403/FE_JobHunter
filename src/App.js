
import './App.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './pages/contact';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import HeaderClient from './components/HeaderClient';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ManageUser from './components/Admin/User/ManageUser';




const LayoutClient = () => {
  return (
    <div className='layout-app'>
      <HeaderClient />
      <Outlet />
      <Footer />
    </div>
  )
}

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutClient />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ]
    }, {
      path: "/admin",
      element: <Admin />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "manage-user",
          element: <ManageUser />,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
