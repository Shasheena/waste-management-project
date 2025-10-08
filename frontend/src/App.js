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
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import SellersignUp from "./pages/SellersignUp.jsx"; //Tries to load a file called SellersignUp.jsx in the same folder as App.jsx.
import SellersignIn from "./pages/SellersignIn.jsx";
import Home from "./pages/Home.jsx"
import SdOverview from "./pages/SdOverview.jsx"
import AddItem from "./pages/AddItem.jsx"
import MyItems from "./pages/MyItems.jsx"
import Edit from "./pages/Edit.jsx"
import BuyersignUp from "./pages/BuyersignUp.jsx"
import BuyersignIn from "./pages/BuyersignIn.jsx"
import Itemlisting from "./pages/Itemlisting.jsx"
import Interestlisting from "./pages/Interestlisting.jsx"
import PickupPage from "./pages/PickupPage.jsx"
import ForgotPw from "./pages/ForgotPw.jsx"
import Profile from "./pages/Profile.jsx"
import Learnmore from "./pages/Learnmore.jsx"
import Option from "./pages/Option.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/SellersignUp" element={<SellersignUp />} />
        <Route path="/SellersignIn" element={<SellersignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SdOverview" element={<SdOverview />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/MyItems" element={<MyItems />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/BuyersignUp" element={<BuyersignUp />} />
        <Route path="/BuyersignIn" element={<BuyersignIn />} />
        <Route path="/Itemlisting" element={<Itemlisting />} />
        <Route path="/Interestlisting" element={<Interestlisting />} />
        <Route path="/PickupPage/:id" element={<PickupPage />} />
        <Route path="/ForgotPw" element={<ForgotPw />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Learnmore" element={<Learnmore />} />
        <Route path="/Option" element={<Option />} />
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


