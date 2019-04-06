import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './components/nav';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import bg from './images/bg.jpg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: space-between;
  background: url(${bg});
  background-size: contain;
  padding: 0 50px;

  > section {
    min-height: 35vh; 
  }

  @media(max-width: 786px){
    padding: 0;
  }
`;


class App extends Component {
  render() {
    return (
      <AppContainer className="App" >
          <SideBar />
          <Element name="section1">
            <Section1 />
          </Element>
          <Element name="section2">
            <Section2 />
          </Element>
          <Element name="section3">
            <Section3 />
          </Element>
      </AppContainer>
    );
  }
}

export default App;
