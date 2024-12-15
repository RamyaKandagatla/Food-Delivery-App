import {fireEvent, render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('should render Header component with a login button', () => {
    render(
        // BrowserRouter to understand the Link in header component
        <BrowserRouter>
        {/* // Provider to understand the useSelector in header component */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginbutton = screen.getByRole('button',{name: "Login"});

    const loginbutton = screen.getByText("Login")

    expect(loginbutton).toBeInTheDocument();
});

it('should render Header component with a cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginbutton = screen.getByText('Cart [0]');

    expect(loginbutton).toBeInTheDocument();
});

it('should render Header component with a cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // u can use regex also for text , so no need to write the exact string .
    const loginbutton = screen.getByText(/Cart/);

    expect(loginbutton).toBeInTheDocument();
});

it('should change the Login button to Logout onClick', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const Loginbutton = screen.getByRole("button", {name : 'Login'});

    fireEvent.click(Loginbutton);

    const LogoutButton = screen.getByRole("button", {name : 'Logout'});

    expect(LogoutButton).toBeInTheDocument();
});