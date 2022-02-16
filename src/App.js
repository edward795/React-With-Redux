import logo from './logo.svg';
import './App.css';
import CakeComponent from './components/cakeComponent';
import HooksCakeComponent from './components/HooksCakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import NewCakeComponent from './components/NewCakeComponent';
import ItemComponent from './components/ItemComponent';
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemComponent cake/>

        {/* <CakeComponent/>
        <HooksCakeComponent/>
        <IceCreamComponent/>
        <NewCakeComponent/> */}

      </div>
    </Provider>
  );
}

export default App;
