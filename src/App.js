// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from './Components/Product';
// import RootLayout from './Components/RootLayout';
// import Cart from './Components/Cart';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<RootLayout/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// App.js
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Components/Product';
import RootLayout from './Components/RootLayout';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import store from './Store/store'; // Import your Redux store

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}> {/* Wrap entire app with Provider */}
          <Routes>
            <Route path='/' element={<RootLayout />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

