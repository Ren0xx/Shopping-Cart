// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import ShopItems from "./ShopItems";

// const items = [
//     {
//         name: "basketball cap",
//         img: "#",
//         price: "25$",
//         quantity: 0,
//     },
    
// ];



// describe("Shop items", () => {
//     it("checks if input is correct", () => {
//         const addMock = jest.fn();
//         render(<ShopItems items={items} addToCart={addMock}/>);

//         const input = screen.getByRole("spinbutton");
//         const button = screen.getByRole("button");
//         userEvent.type(input, "4");

//         expect(button.value).toMatch(/4/);
//     });
// });
