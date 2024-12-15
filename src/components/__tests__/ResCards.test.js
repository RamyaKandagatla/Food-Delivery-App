import { render, screen } from "@testing-library/react";
import ResCards, { withDiscount } from "../ResCards";
import MOCK_DATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom";


it("should render ResCard Component with props Data", () => {
    render(<ResCards ResData={MOCK_DATA}/>);

    const resCardName = screen.getByText("Soul Rasa");

    expect(resCardName).toBeInTheDocument();
});

it("should render ResCard Component with Discount Label", () => {
    const DiscountTag = withDiscount(ResCards);
    render(<DiscountTag ResData={MOCK_DATA}/>);

    const resCardLabel = screen.getByText("60% OFFUPTO ₹100");

    expect(resCardLabel).toBeInTheDocument();
});

