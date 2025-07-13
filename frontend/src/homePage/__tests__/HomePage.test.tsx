import {render, screen} from "@testing-library/react";
import HomePage from "../HomePage.tsx";
import {expect} from "vitest";

describe("Home Page", () => {
    it("should display home page header", async () => {
        render(<HomePage/>);
        const header = screen.getByLabelText("home page header");
        expect(header).toBeVisible();
    })
})