import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/homescreen';
import UpLoadScreen from './screen/uploadscreen';
import Header from './components/header';
import Footer from './components/footer';
import SellListScreen from './screen/sellListScreen';
import RentListScreen from './screen/rentListScreen';
import ProfileScreen from './screen/profilescreen';
import ProductDetail from './screen/productdetailscreen';
import LoginScreen from './screen/loginScreen';
import RegisterScreen from './screen/registerscreen';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';

const App = () => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/uploadscreen' element={<UpLoadScreen/>}/>
                <Route path='/sellListScreen' element={<SellListScreen/>} />
                <Route path='/rentListScreen' element={<RentListScreen/>}/>
                <Route path='/profileScreen' element={<ProfileScreen/>}/>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/register' element={<RegisterScreen/>}/>

                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
            <Footer/>
        </div>
    )
}
export default App
