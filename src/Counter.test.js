import { render,screen,fireEvent } from "@testing-library/react";
import Counter from "./Counter";


test("when button clicked increment count",() => {
    render(<Counter/>);

    const button  = screen.getByText("Increment");
    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue.textContent).toBe("Count: 0")

    fireEvent.click(button);
    expect(counterValue.textContent).toBe("Count: 1")

})
