import React, {useState, createContext} from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CreateUserPage from './pages/CreateUserPage';


const ContextCustomer = createContext([])
const ContextUser = createContext([])

function App() {
  const [customerList, setCustomerList] = useState(null)
  const [user, setUser] = useState(null)

  return (
    <div>
      <ContextCustomer.Provider value= {{customerList, setCustomerList}}>
        <ContextUser.Provider value={{user, setUser}}>
      <Routes>
       
        <Route path="/" element={<StartPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/create/user" element={<CreateUserPage/>}/>
        <Route path="/customer/:id" element={<CustomerDetailPage/>}/>
      </Routes>
      </ContextUser.Provider>
      </ContextCustomer.Provider>
      
      
    </div>
  );
}

export default App;
export {ContextCustomer, ContextUser}
