import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    margin: 120px auto 60px;
    display: flex;
    justify-content: center;
    /* background: green; */
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 360px;
    margin-top: 20px;
    padding: 20px;

    > input {
        font-family: 'Varela Round', sans-serif;
        background: none;
        margin-bottom: 20px;
        color: #fff;
        border: 0;
        border-bottom: 1px solid #eee;
        padding: 20px 10px 10px 10px;
        letter-spacing: 2.3px;

        &:focus {
            outline: 0;
            border-bottom: 2px solid #fff;
        }

        ::placeholder {
            color: #fff;
        }
    }

    button {
        background: none;
        border: 1px solid #ffffffa8;
        padding: 10px 10px;
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
        
        &:focus {
            outline: 0;
        }
    }
`;


class section extends Component {

    state = {
        name: "",
        address: "",
        tel: "",
    }

    onChange({name, value}) {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("this.state: ", this.state)
    }

    render() {
        return (
            <Section>
                <Form>  
                    <input type="txt" placeholder="שם מלא" value={this.state.name} name="name" onChange={({target}) => this.onChange(target)}/>
                    <input type="txt" placeholder="כתובת" value={this.state.address} name="address" onChange={({target}) => this.onChange(target)}/>
                    <input type="txt" placeholder="טלפון" value={this.state.tel} name="tel" onChange={({target}) => this.onChange(target)}/>
                    <button onClick={({target})=>this.onSubmit(target)}>שלח</button>
                </Form>
            </Section>
        );
    }
}

export default section;