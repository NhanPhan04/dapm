import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/homescreen';
import UpLoadScreen from './screen/uploadscreen';


const App = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/uploadscreen' element={<UpLoadScreen/>}/>
            </Routes>
        </div>
    )
}
export default App
