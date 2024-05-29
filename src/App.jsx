import Header from "./Components/Header";
import Meals from "./Components/Meals";
import {CartContextProvider} from "./cartStore/CartContext";
import { UserProgressContextProvider } from "./cartStore/UserProgressContext";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

function App() {


  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
        
      <Meals/>
      <Cart/>
      <CheckOut />
      </CartContextProvider>
      </UserProgressContextProvider>
    
    
  );
}

export default App;
