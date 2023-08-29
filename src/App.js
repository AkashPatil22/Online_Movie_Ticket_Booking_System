import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Manager from './pages/Manager'
import UpdateProfile from './pages/UpdateProfile'
import UpdatePassword from './pages/UpdatePassword'
import AddTheatreReview from './pages/AddTheatreReview'
import ViewTheatreReviewList from './pages/ViewTheatreReviewList'
import Sitefeedback from './pages/Sitefeedback'
import SearchPage from './pages/SearchPage'
import TheatrePage from './pages/TheatrePage'
import ChairList from './pages/ChairList'
import ContactUs from './pages/ContactUs'
import OrderSummary from './pages/OrderSummary'
import SavePayment from './pages/SavePayment'
import SuccessPage from './pages/SuccessPage'
import TicketPage from './pages/TicketPage'
import MovieReview from './pages/MovieReview'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="container-fluid ">
      <div className='row'> 
      <div className='col-12 g-0'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          <Route path="/addtheatrereview" element={<AddTheatreReview/>} />
          <Route path="/viewtheatrereviewlist" element={<ViewTheatreReviewList/>} />
          <Route path="/sitefeedback" element={<Sitefeedback/>}/>
          <Route path="/searchpage" element={<SearchPage/>}/>
          <Route path="/TheatrePage" element={<TheatrePage/>}/>
          <Route path="/chairs" element={<ChairList/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/ordersummary" element={<OrderSummary/>}/>
          <Route path="/savepayment" element={<SavePayment/>}/>
          <Route path="/successpage" element={<SuccessPage/>}/>
          <Route path="/ticketpage" element={<TicketPage/>}/>
          <Route path="/moviereview" element={<MovieReview/>}/>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
      
    
    
      </div>
      </div>
    </div>
  )
}

export default App
