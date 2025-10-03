// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellersignUp from "./pages/SellersignUp.jsx"; //Tries to load a file called SellersignUp.jsx in the same folder as App.jsx.
import SellersignIn from "./pages/SellersignIn.jsx";
import Home from "./pages/Home.jsx"
import SdOverview from "./pages/SdOverview.jsx"
import AddItem from "./pages/AddItem.jsx"
import MyItems from "./pages/MyItems.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to EcoExchange</h1>} />
        <Route path="/SellersignUp" element={<SellersignUp />} />
        <Route path="/SellersignIn" element={<SellersignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SdOverview" element={<SdOverview />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/MyItems" element={<MyItems />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import SellersignUp from './pages/SellersignUp';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Welcome to Home</h1>,
//   },
//   {
//     path: "/signup",
//     element: <SellersignUp />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


