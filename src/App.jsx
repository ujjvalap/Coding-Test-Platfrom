// import React from 'react';
// import Home from './Components/Home';
// import Admin from './auth/Admin';
// import User from './auth/User';

// import './Style/Home.css';
// import './style/Auth.css';


// const App = () => {
//   return (
//       <div className="app">
//           <Home/>
//           <Admin/>
//           <User/>
          
//       </div>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './auth/Admin';
import Admin from './auth/User';
import HomePage from './Components/Home'; 
import './style/Auth.css';
import './style/Home.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
};

export default App;


