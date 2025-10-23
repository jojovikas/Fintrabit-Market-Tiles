
import './App.css'
import BottomNav from './component/BottomNav'
// import FetchData from './component/FetchData'
import StatusBar from './component/layout/StatusBar'
import TopBar from './component/layout/TopBar'
import Tabs from './component/tiles/TabData'

function App() {
  

  return (
   <>
   {/* <h1 className='bg-black text-white'>Working</h1> */}
   <StatusBar/>
   <TopBar/>
   <Tabs/>
   <BottomNav/>
   {/* <FetchData/> */}
   {/* <FetchDatausingFetch/> */}
   </>
  )
}

export default App
