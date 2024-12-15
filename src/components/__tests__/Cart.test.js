import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";



global.fetch = jest.fn(() => {
    // fetch returns a promise
    // promise.resolve returns json
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should load restaurant menu component", async () => {

    await act( async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu />
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText("Veg Specials (6)");
    
    fireEvent.click(accordionHeader);

    const resList = screen.getAllByTestId("reslist");

    expect(resList.length).toBe(6);

    const AddBtn = screen.getAllByRole("button", {name: "Add+"});

    fireEvent.click(AddBtn[0]);

    expect(screen.getByText("Cart [1]")).toBeInTheDocument();

    fireEvent.click(AddBtn[0]);
    expect(screen.getByText("Cart [2]")).toBeInTheDocument();

    const resListincart = screen.getAllByTestId("reslist");

    expect(resListincart.length).toBe(8);

    fireEvent.click(screen.getByRole('button', {name: "Clear Cart"}));

    expect(screen.getAllByTestId("reslist").length).toBe(6);

    expect(screen.getByText("Cart is empty. Add items to the cart.")).toBeInTheDocument();
})