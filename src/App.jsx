
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Posts from './components/Posts/Posts'
import Friends from './components/Friends/Friends'
import Friend from './components/Friend/Friend'
import SinglePost from './components/SinglePost/SinglePost'
import FriendDetails from './components/FriendDetails/FriendDetails'
import PostDetails from './components/PostDetails/PostDetails'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element: <Posts></Posts>,
        },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element: <Posts></Posts>,
        },
        {
          path: '/users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>,
        },
        {
          path: '/post/:id',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
          },
          element: <PostDetails> </PostDetails>,
        },
        {
          path: '/users/:id',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
          },
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: '/about',
          element: <div>About</div>,
        },
        {
          path: '/contact',
          element: <div>Contact</div>,
        },
        {
          path: '*',
          element: <div className='text-7xl  font-bold text-center my-20'>Not found 404</div>,
        },
      ]
    }

  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
