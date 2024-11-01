import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PaginationCustom=({currentPage,setCurrentPage,totalPages})=>{
    return(
        <div className="pagination flex justify-center items-center mt-4">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="pl-4 pr-2 py-2 bg-gray-300  mr-2  justify-center flex rounded-full"
                >
                    <ArrowBackIosIcon/>
                </button>
                <span>{`Trang ${currentPage} trong ${totalPages}`}</span>
                <button 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-2 rounded-full bg-gray-300  ml-2 flex justify-center"
                >
                    <ArrowForwardIosIcon/>
                </button>
            </div>
    )
}
export default PaginationCustom