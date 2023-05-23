import './App.css';
import Cart from './Components/Food Order App/Cart/Cart';
// import Counter from './Components/Counter/Counter';
// import ClassCounterContainer from './Containers/ClassCounter';
import Header from './Components/Food Order App/Layout/Header';
import Meals from './Components/Food Order App/Meals/Meals';
import { useSelector } from 'react-redux';

function App() {
  const showCartModel=useSelector(state=>state.showCartModel);
  
  
  return (
    <>
      {/* <ClassCounterContainer /> */}
      {showCartModel && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
