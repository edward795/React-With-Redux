import logo from './logo.svg';
import './App.css';
import CakeComponent from './components/cakeComponent';
import HooksCakeComponent from './components/HooksCakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent/>
        <HooksCakeComponent/>
        <IceCreamComponent/>
      </div>
    </Provider>
  );
}

export default App;
