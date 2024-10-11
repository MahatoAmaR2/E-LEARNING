import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Course } from "./pages/Courses";
import { Contact } from "./pages/Contact";
import { Teacher } from "./pages/Teachers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Course />} />
      <Route path="contact" element={<Contact />} />
      <Route path="teachers" element={<Teacher />} />
    </Route>
  )
);
function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
