import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

//pages imports
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import UserSignUp from "./pages/UserSignUp/UserSignUp";
import UserLogin from "./pages/UserLogin/UserLogin";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Header />
        <main className="App__main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/signup" exact component={UserSignUp} />
            <Route path="/login" exact component={UserLogin} />

            <Route
              forceRefresh={true}
              path="/product/:id"
              exact
              component={ProductDetails}
            />
            <Route path="/logout" exact component={LogoutPage} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
