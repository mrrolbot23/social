import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import LoginBox from "../LoginBox.tsx";

describe("Login Box", () => {
    it('should display required input fields', () => {
        render(<LoginBox/>);
        const emailInput = screen.getByLabelText("email input field");
        const passwordInput = screen.getByLabelText("password input field");
        const submitButton = screen.getByLabelText("submit button");
        expect(emailInput).toBeVisible();
        expect(passwordInput).toBeVisible();
        expect(submitButton).toBeVisible();
    });
})