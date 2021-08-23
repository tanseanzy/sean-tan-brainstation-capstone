import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//component imports
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages imports

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import UserSignUp from "./pages/UserSignUp/UserSignUp";
import UserLogin from "./pages/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="App__main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/product/:id" exact component={ProductDetails} />
            <Route path="/signup" exact component={UserSignUp} />
            <Route path="/login" exact component={UserLogin} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
