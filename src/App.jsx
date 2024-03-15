import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import FeaturedCard from './components/FeaturedCard/FeaturedCard';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarPage from './pages/CarPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { BrandsPage } from './pages/BrandsPage';
import Login from './components/Login/Login';
import UserProvider from './context/UserContext';
import GoogleOAuthSuccessRedirect from './components/GoogleOAuthSuccessRedirect/GoogleOAuthSuccessRedirect';
import { FavouritePage } from './pages/FavouritePage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import FacebookOAuthSuccessRedirect from './components/FacebookOAuthSuccessRedirect/FacebookOAuthSuccessRedirect';
import { Offline } from 'react-detect-offline';
import FavoriteProvider from './context/FavoriteContext';
import ContactUsPage from './pages/ContactUsPage';
import InvestWithUsPage from './pages/InvestWithUsPage';
import ListYourCarsPage from './pages/ListYourCarsPage';


import { LanguageProvider } from './context/LanguageContext';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'navbar', element: <NavBar /> },
        { path: 'card', element: <FeaturedCard /> },
        { path: '/cars', element: <CarsPage /> },
        { path: 'categories', element: <CategoriesPage /> },
        { path: 'brands', element: <BrandsPage /> },
        { path: 'favourite', element: (
            <ProtectedRoute>
              <FavouritePage />
            </ProtectedRoute>
          ),
        },
        { path: 'google-oauth-success-redirect', element: <GoogleOAuthSuccessRedirect /> },
        { path: 'facebook-oauth-success-redirect', element: <FacebookOAuthSuccessRedirect /> },
        { path: 'login', element: <Login /> },
        { path: 'contactus', element: <ContactUsPage /> },
        { path: 'investwithus', element: <InvestWithUsPage /> },
        { path: 'listyourcars', element: <ListYourCarsPage /> },
        { path: '*', element: <NotFound /> },
      ],
    },
    { path: 'car/:id', element: <CarPage /> },
  ]);

  return (
    <>
    <Offline>
  <span className='network-status box-shadow p-3 ps-4 '>
    <i className='bi bi-wifi-off me-2'></i> You are currently offline.
  </span>
</Offline>

<UserProvider>
  <FavoriteProvider>
    <Toaster />
    <LanguageProvider >
    <GoogleAnalytics />
    <RouterProvider router={routes} />
    </LanguageProvider>
     
 
  </FavoriteProvider>
</UserProvider>
    </>
  );
}

export default App;
