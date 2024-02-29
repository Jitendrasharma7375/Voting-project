import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import ManageCandidate from './Components/ManageCandidate'
import Profile from './Components/Profile'
import ManageElection from './Components/ManageElection'
import Navbar from './Components/Navbar'
import AddVoterForm from './Components/AddVoterForm'
import Voters from './Components/Voters'
import CreateElection from './Components/CreateElection'
import UpdateElection from './Components/UpdateElection'
import DeleteElection from './Components/DeleteElection'
import SignOut from './Components/Signout'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/manageVoter",
        element: <ManageCandidate />,
        children: [
          {
            path: "/manageVoter/addVoter",
            element: <AddVoterForm />
          },
          {
            path: "/manageVoter/AllVoters",
            element: <Voters />
          }
        ]
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/manageElection",
        element: <ManageElection />,
        children: [
          {
            path: "/manageElection/createElection",
            element: <CreateElection />
          },
          {
            path: "/manageElection/updateElection",
            element: <UpdateElection />
          },
          {
            path: "/manageElection/deleteElection",
            element: <DeleteElection />
          }
        ]
      },
      {
        path:"/signout",
        element:<SignOut />
      }
    ]
  },

])

export default App