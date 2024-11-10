import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/homescreen';
import UpLoadScreen from './screen/uploadscreen';
import SellListScreen from './screen/sellListScreen';
import RentListScreen from './screen/rentListScreen';
import ProfileScreen from './screen/profilescreen';
import ProductDetail from './screen/productdetailscreen';
import LoginScreen from './screen/loginScreen';
import RegisterScreen from './screen/registerscreen';
import ChatBox from './components/ChatBox/ChatBox';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';
import ProfileBroker from './components/profilebroker/profilebroker';
import LoginBroker from './components/loginbroker/loginbroker';
import RegisterBroker  from './components/registerbroker/registerbroker';
import ChangePassword from './screen/updateprofile/ChangePassword';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/sellListScreen' element={<SellListScreen/>} />
                <Route path='/rentListScreen' element={<RentListScreen/>}/>
                <Route path='/profileScreen' element={<ProfileScreen/>}/>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/register' element={<RegisterScreen/>}/>
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/chat" element={<ChatBox />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path='/uploadscreen' element={<UpLoadScreen/>}/>
                <Route path='/profilebroker' element={<ProfileBroker/>}/>
                <Route path='/loginbroker' element={<LoginBroker/>}/>
                <Route path='/registerbroker' element={<RegisterBroker/>}/>
    
            </Routes>
        </div>
    )
}
export default App
