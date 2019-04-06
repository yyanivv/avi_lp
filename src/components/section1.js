import React, { Component } from 'react';
import styled from 'styled-components';
import Logo_transparent from '../images/logo.png';

const SectionContainer = styled.section`
    width: 100%;   
`

const Header = styled.header`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 30px 10px;

    > div > p {
        font-family: 'Amatic SC', cursive;
        color: #c6c5c4;
        font-size: 30px;
        margin: 0 0 5px 0;
        letter-spacing: 2px;
    }
`;

const Logo = styled.img`
    width: 190px;
    margin: 30px;
`;

class Section extends Component {
    render() {
        return (
            <SectionContainer>
                <Header> 
                    {/* <Title>LOGO</Title> */}
                    <Logo src={Logo_transparent} />

                    <div>
                        <p>
                            במשך 5 שנים מתמחים באפיית בורקסים,
                        </p>
                        <p>
                            וסגנונות מתוקים.
                        </p>
                        <p>
                            צוות מומחה בשילוב מתוקים ויצירת טעמים מופלאים.
                        </p>
                    </div>
                </Header>
            </SectionContainer>
        );
    }
}

export default Section;