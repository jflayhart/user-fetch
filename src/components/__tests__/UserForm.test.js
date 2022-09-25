import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "../UserForm";
import { defaultTheme } from "../../theme";
import { ThemeProvider } from "styled-components";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const push = jest.fn();
useRouter.mockImplementation(() => ({
  push,
}));

const mockAPIData = {
  occupations: ["occupation1", "occupation2"],
  states: [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
  ],
};

describe("UserForm behavior", () => {
  test("loads form and submits successfully", async () => {
    // ARRANGE
    render(
      <ThemeProvider theme={defaultTheme}>
        <UserForm data={mockAPIData} />
      </ThemeProvider>
    );

    const name = "Joey";
    const nameInput = screen.getByLabelText("name");
    fireEvent.change(nameInput, { target: { value: name } });
    expect(nameInput.value).toBe(name);

    const emailInput = screen.getByLabelText("email");
    fireEvent.change(emailInput, { target: { value: "joey@example.com" } });
    expect(emailInput.value).toBe("joey@example.com");

    const passInput = screen.getByLabelText("password");
    fireEvent.change(passInput, { target: { value: "1234" } });
    expect(passInput.value).toBe("1234");

    const stateInput = screen.getByLabelText("state");
    fireEvent.change(stateInput, {
      target: { value: mockAPIData.states[1].abbreviation },
    });
    expect(stateInput.value).toBe(mockAPIData.states[1].abbreviation);

    const occupationInput = screen.getByLabelText("occupation");
    fireEvent.change(occupationInput, {
      target: { value: mockAPIData.occupations[0] },
    });
    expect(occupationInput.value).toBe(mockAPIData.occupations[0]);

    // ACT
    await userEvent.click(screen.getByRole("button"));

    // ASSERT
    await waitFor(() => {
      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith(`/welcome?name=${name}`);
    });
  });
});
