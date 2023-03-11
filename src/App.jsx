
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import { AppContext } from './utils/contextApi'

function App() {

  return (
    <div className="App">
     <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home></Home>}/>
            <Route path='/:query/:startIndex' exact element={<SearchResult></SearchResult>}/>
          </Routes>
        </BrowserRouter>
     </AppContext>
    </div>
  )
}

export default App
