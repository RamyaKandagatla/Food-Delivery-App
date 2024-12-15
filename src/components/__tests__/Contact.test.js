import {render, screen} from '@testing-library/react'
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('test cases of contact us page', () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("BeforeEach");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("afterEach");
    // });

    // instead of "test" u can write as "it" also
    // there is no difference b/w it and test
    it('render contact us page',()=>{
        render(<Contact/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it('should load button inside contact component', () => {
        render(<Contact/>);

        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    it('should load placeholder inside the contact component', () => {
        render(<Contact/>);

        const inputName = screen.getByPlaceholderText('name');
        expect(inputName).toBeInTheDocument();
    });

    it('should load 2 input boxes on the contact component', () => {
        render(<Contact/>);

        //Querying
        const inputBoxes = screen.getAllByRole('textbox');


        //Assertion
        expect(inputBoxes.length).toBe(2);

    });
});
