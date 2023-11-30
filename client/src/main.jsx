import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import GuildPage from './pages/GuildPage';
import Profile from './pages/Profile';
import GuildComponent from './components/GuildComponent';
import Post from './components/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/guild',
        element: <GuildPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/my posts',
        element: <Post />,
      },
      {
        path: '/my guilds',
        element: <GuildComponent />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
