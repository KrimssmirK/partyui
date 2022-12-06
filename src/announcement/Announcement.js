import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Announcement.css';
import foodImg from './img/food.png';

const Announcement = () => {
  const announcementItems = [
    {img: foodImg, date: '2022.1.5', title: 'Halloween 15% Discount Promo', description: 'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'},
    {img: foodImg, date: '2022.1.5', title: 'Halloween 15% Discount Promo', description: 'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'},
    {img: foodImg, date: '2022.1.5', title: 'Halloween 15% Discount Promo', description: 'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'},
    {img: foodImg, date: '2022.1.5', title: 'Halloween 15% Discount Promo', description: 'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'},
  ];
  return (
    <div className='Announcement'>
    <div className='Announcement-title'>
      <h1>ANNOUNCEMENT</h1>
    </div>
    <div className='Announcement-list'>
      <AnnouncementItem img={foodImg} date={'2022.1.5'} title={'I love you'} description={'BBQ & Drinks Plan Adult・senior high: ￥3,500 to ￥ 2,975...'} />
      {
        announcementItems.map(item =>
          <AnnouncementItem {...item} />
        )
      }
    </div>
  </div>
  );
}
  

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