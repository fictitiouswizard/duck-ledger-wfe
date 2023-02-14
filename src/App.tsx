import LoginPage from './pages/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterUserPage from './pages/register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterUserPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
