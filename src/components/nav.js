import React, { Component } from 'react';
import styled from 'styled-components';
import Icon01 from '../images/icon_01.png';
import Icon02 from '../images/icon_02.png';
import Icon03 from '../images/icon_03.png';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Nav = styled.nav`
    /* display: flex;
    flex-direction: column-reverse; */
`;

const Label = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: #fff;
    width: 75px;
    height: 55px;
    top: ${({top}) => top  + 'vh'};
    right: -70px;
    border-radius: 16px 0px 0px 16px; 
    transition: 0.4s all ease-in-out;
    border-color: #b9b2b2;
    border-width: 1px;
    border-right-width: 0px;
    border-style: solid;
    overflow: hidden;
    padding:  0 10px 0 50px ;
    z-index: 10;
    background: #615f5f;

    cursor: pointer;
    :hover {
        
        transition: 0.6s all ease-in-out;
        border-radius: 2px 0px 0px 2px; 
        right: 0;
    }

    > div {
        position: relative;
        left: -30px;
        max-width: 35px;
        width: 100%;
        max-height: 35px;
        height: 100%;
        background: #fff;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        
        &.first {
            mask-image: url(${Icon01});
        }
        
        &.sec {
            mask-image: url(${Icon02});
        }
        
        &.last {
            mask-image: url(${Icon03});
        }
    }

    @media(max-width: 768px) {

        right: ${({right}) => right + 'px'};
        top: -40px;
        transform: rotate(-90deg);
        padding-left: 35px;
        border-radius: 0;

        :hover {    
            transition: 0.6s all ease-in-out;
            border-radius: 0;
            right: ${({right}) => right + 'px'};
        }
        > div {
            transform: rotate(90deg);
        }
        
    }
`;

class SideBar extends Component {
    render() {
        return (
            <Nav>
                <Link to="section1" smooth={true} offset={0} duration={500}>
                    <Label top={'35'} right={'60'}>
                        <div className='first'/>
                        אודות
                    </Label>
                </Link>
                <Link to="section2" smooth={true} offset={50} duration={500}>
                    <Label top={'50'} right={'130'}>
                        <div className='sec'/>
                        תמונות
                    </Label>
                </Link>
                <Link to="section3" smooth={true} offset={50} duration={500}>
                    <Label top={'65'} right={'200'}>
                        <div className='last'/>
                        צור קשר
                    </Label>
                </Link>
            </Nav>
        );
    }
}

export default SideBar;