import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import EntryForm from './Pages/EntryForm'
import DailyRegister from './Pages/DailyRegister'
import Report from './Pages/Report'
import Header from './Components/Header'
import SecondHeader from './Components/SecondHeader'
import './App.css';
import ReportTable from './Pages/ReportTable'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <SecondHeader />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/entryform' element={<EntryForm/>} />
         <Route path='/dailyregister' element={<DailyRegister/>} />
         <Route path='/report' element={<Report/>} />
         <Route path='/reportTable' element={<ReportTable/>} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
