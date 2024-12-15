import { act } from "react-dom/test-utils";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should Search Res List for burger text input", async () => {

    await act( async() =>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const ResCardsBeforeSearch = screen.getAllByTestId("Res-Card");

    expect(ResCardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: {value : "burger"} });

    fireEvent.click(searchBtn);

    const ResCardsAfterSearch = screen.getAllByTestId("Res-Card");

    expect(ResCardsAfterSearch.length).toBe(1);

});

it("should Search Res List for burger text input", async () => {

    await act( async() =>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const ResCardsBeforeSearch = screen.getAllByTestId("Res-Card");

    expect(ResCardsBeforeSearch.length).toBe(20);

    const GoodRatedRestaurantBtn = screen.getByRole("button", {name: "GoodRatedRestaurants"});

    fireEvent.click(GoodRatedRestaurantBtn);

    const ResCardsAfter = screen.getAllByTestId("Res-Card");

    expect(ResCardsAfter.length).toBe(20);

});