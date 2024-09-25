import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from'React'
import PostListProvider from './store/post-list-store'

function App() {
  const [SelectedTab, setSelectedTab] = useState("Create Post")

  return <>
  <PostListProvider>
  <div className ="app-container">
  <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></Sidebar>
  <div className="content">
  <Header></Header>
  {SelectedTab==="Home" ?( <PostList></PostList>) : (<CreatePost></CreatePost>)}
  <Footer></Footer>
  </div>
  </div>
  </PostListProvider>
  </>
}

export default App;
