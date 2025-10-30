import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './main.js'
import Start from './start.js'

export default function Dis(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/start' element={<Start/>} />
            </Routes>
        </Router>
        </>
    )
}