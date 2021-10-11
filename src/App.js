import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute.js';


function App() {
  return (
    <div>
    
     <AuthProvider>
        <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          
          <PrivateRoute path="/shop">
            <Shop></Shop>
          </PrivateRoute>
          <Route exact path="/orderReview">
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute  path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
