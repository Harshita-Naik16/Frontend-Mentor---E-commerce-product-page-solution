import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <div className="font-sans">
        <ContextProvider>
          <Navbar />
          <Product />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
