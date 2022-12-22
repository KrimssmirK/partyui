import './App.css';

// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './navbar/Navigation';
import Carousel from './carousel/Carousel';
import Reservation from './reservation/Reservation';
import Announcement from './announcement/Announcement';
import AboutUs from './about/aboutus';

// testing for calendar app
// import MyCalendar from './calendar/MyCalendar';

const App = () =>  
  <div className="App">
    <Navigation />
    <Carousel />
    <Reservation />
    <Announcement />
    <AboutUs />
    {/* <MyCalendar /> */}
  </div>

export default App;
