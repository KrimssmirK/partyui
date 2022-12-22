import React, { useEffect, useReducer } from 'react';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styling with css
import './Announcement.css';

// image components
import foodImg from './img/food.png';

const initialAnnouncements = [
  {img: foodImg, date: '2022.1.5', title: 'Halloween 15% Discount Promo', description: 'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'},
];

const announcementReducer = (currentState, action) => {
  switch (action.type) {
    case 'ANNOUNCEMENT_FETCH_SUCCESS':
      return {
        data: action.payload,
      };
    default:
      throw new Error();
  }
};

const getAsyncData = () =>
  new Promise(resolve => {
    setTimeout(() => resolve({ data: { announcements: initialAnnouncements }})
    , 2000);
  });

const API_ENDPOINT = '';                                                                                                                                                                                                                                                                                                                                                                                                                                               

const Announcement = () => {
  const [announcements, dispatchAnnouncements] = useReducer(announcementReducer, { data: [] });
  
  // it is similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    getAsyncData()
      .then(result => dispatchAnnouncements({
        type: 'ANNOUNCEMENT_FETCH_SUCCESS',
        payload: result.data.announcements,
      }))
      .catch(() => new Error());
  }, [announcements]
  );

  return (
    <div className='Announcement'>
    <div className='Announcement-title'>
      <h1>ANNOUNCEMENT</h1>
    </div>
    <div className='Announcement-list'>
      {
        announcements.data.map(item => <AnnouncementItem {...item} />)
      }
    </div>
  </div>
  );
};
  


  

const AnnouncementItem = ({ img, date, title, description }) =>
  <Container fluid style={{
    backgroundColor: '#1C374B',
    padding: '25px',
    borderBottom: '1px solid black',
  }}>
    <Row>
      <Col>
        <div className='image'>
          <img 
            src={img}
            alt='food'
          />
        </div>
      </Col>
      <Col>
        <div className='description'>
          <p style={{
            fontSize: '2vw',
            color: '#F1E7E7',
            margin: '0',
          }}>{date}</p>
          <h2 style={{
            fontSize: '3vw',
            color: 'white',
            fontWeight: 'bold',
          }}>{title}</h2>
          <p style={{
            fontSize: '2.5vw',
            color: 'white',
          }}>{description}</p>
        </div>
      </Col>
    </Row>
  </Container>

  
export default Announcement;