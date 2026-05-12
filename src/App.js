import "./App.css";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <div className="App">

      <Suspense fallback={<div></div>}>
        <Navbar />
        <Home />
      </Suspense>
      <Analytics />

    </div>
  );
}

export default App;

