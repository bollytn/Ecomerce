import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { MainLayout } from '@layouts/index'

//Pages
import Home from "@pages/Home";
import About from "@pages/About";
import Products from "@pages/Products";
import Categories from "@pages/Categories";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "categories/products/:prefix",
                element: <Products />,
                loader: ({ params }) => {
                    // check if user is string by regex
                    //. !params.prefix?.match(/^[a-zA-Z]+$/)
                    if (typeof params.prefix !== "string" || !/^[a-zA-Z]+$/.test(params.prefix)) {
                        throw new Response("bad request", { status: 400, statusText: "Category not found" })
                    }
                    return true;
                }
            },
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "login",
                element: <Login />,
                // fallback: true, // optional, default to true
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter