import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CreateUser from "../Pages/CreateUserPage/CreateUser/CreateUser";
import DisplayUser from '../Pages/DisplayUserPage/DisplayUser/DisplayUser'
import UpdateUser from '../Pages/UpdateUserPage/UpadateUser/UpdateUser'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <DisplayUser></DisplayUser>
            },
            {
                path: '/create-user',
                element: <CreateUser></CreateUser>
            },
            {
                path: '/update-user/:id',
                loader: ({ params }) => fetch(`https://mongo-crud-server.vercel.app/user/${params.id}`),
                element: <UpdateUser></UpdateUser>
            }
        ]
    }
])

export default router;