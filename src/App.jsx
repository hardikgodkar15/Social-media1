import './App.css'
import './phone.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Createpost from './components/Createpost'
import Postlist from './components/Postlist'
import { useState } from 'react'
import PostlistProvider from './store/post-list-store'


function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
 
  return(
    <PostlistProvider> <div className="App-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab }></Sidebar>
    <div className="content">
    <Header></Header>
    {selectedTab === 'Home' ? (<Postlist></Postlist>):
    (<Createpost></Createpost>)}
    
    <Footer></Footer>
    </div>
    
    
    </div>
    </PostlistProvider>
   
    

  ) 
}

export default App
