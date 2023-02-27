import PostIdPage from "../Components/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: PostIdPage}
]
export const publicRoutes = [
    {path: '/login', element: Login}

]