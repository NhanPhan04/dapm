import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/homescreen';
import UpLoadScreen from './screen/uploadscreen';
import Header from './components/header';
import Footer from './components/footer';
import SellListScreen from './screen/sellListScreen';
import RentListScreen from './screen/rentListScreen';
import ProfileScreen from './screen/profilescreen';
import ProductDetail from './screen/productdetailscreen';


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
                <Route path='/productDetail' element={<ProductDetail/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App
