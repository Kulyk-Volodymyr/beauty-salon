import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "/assets/fonts/Jost-Regular.ttf";
import "/assets/fonts/Jost-Medium.ttf";
import "/assets/fonts/Jost-SemiBold.ttf";
import "/assets/fonts/Jost-Bold.ttf";
import "/assets/fonts/KiwiMaru-Medium.ttf";

import { SalonContextProvider } from "./context/SalonContext";

import Layout from "./components/layout/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Service from "./pages/Service";
import Story from "./pages/Story";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book", element: <Book /> },
      { path: "/service", element: <Service /> },
      { path: "story", element: <Story /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <SalonContextProvider>
        <RouterProvider router={router} />
      </SalonContextProvider>
    </>
  );
}

export default App;
