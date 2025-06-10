// import "./App.css"
import {Route,BrowserRouter as Router, Routes}from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import ApplyNow from "./pages/ApplyNow";
import Footer from "./components/Footer/Footer";

const App = ()=>{
  return(
       <Router>
          <Routes>
            <Route path="/header" element={<Header/>}/>
            <Route path="/aboutpage" element={<AboutPage/>} />
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/coursespage" element={<CoursesPage/>}/>
            <Route path="/ContactPage" element={<ContactPage/>}/>
            <Route path="/applynow" element={<ApplyNow/>}/>
            <Route path="/footer" element={<Footer/>}/>
           </Routes>
       </Router>
  )
}
export default App;