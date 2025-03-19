import { render,screen,fireEvent } from "@testing-library/react";
import TextReverser from "./TextReverser";

test("text reverser",() =>{
    render(<TextReverser/>)

    const inputPlaceHolder  = screen.getByPlaceholderText("Type something...");
    const input = screen.getByTestId("text-input")
    const reversedText   = screen.getByTestId("reversed-text");

    expect(reversedText.textContent).toBe("Reversed: ");

    fireEvent.change(input, { target: { value: "hey" } });

    expect(reversedText.textContent).toBe("Reversed: yeh");

    fireEvent.change(input, { target: { value: "react" } });

    expect(reversedText.textContent).toBe("Reversed: tcaer")


})