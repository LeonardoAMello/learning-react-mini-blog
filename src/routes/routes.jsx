// Routes
import Home from "./Home/Home";
import Search from "./Search/Search";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import Dashboard from "./Dashboard/Dashboard";
import About from "./About/About";
import Login from "./Login/Login";
import Register from "./Register/Register";

// Access control
import PrivateRoute from "./PrivateRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
  {
    path: "/new-post",
    element: <PrivateRoute element={<NewPost />} />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
  },
  {
    path: "/edit-post/:id",
    element: <PrivateRoute element={<NewPost />} />,
  },
  {
    path: "/about",
    element: <PrivateRoute element={<About />} />,
  },
  {
    path: "/login",
    element: <PublicOnlyRoute element={<Login />} />,
  },
  {
    path: "/register",
    element: <PublicOnlyRoute element={<Register />} />,
  },
];
