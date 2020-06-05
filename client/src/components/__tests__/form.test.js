import React from 'react'
import ReactDOM from "react-dom";
import Form from "../form/form";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup)
it('renders without crashing', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<Form/>, div)
})

it('renders button correctly', ()=> {
    const {getByTestId} = render(<Form/>)
    expect(getByTestId('button')).toHaveTextContent('Show User')
})

it('match snapshot',()=>{
    const snap = renderer.create(<Form/>).toJSON();
    expect(snap).toMatchSnapShot()
})