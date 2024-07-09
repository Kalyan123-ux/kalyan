import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from './button.js'
test('Render button with Label',()=>{
    const {getByText}=render(
        <Button label="Click me"/>)
        const buttonElement=getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    
});
//className=btn
test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="Click me"/>
    )
    const buttonElement=container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})