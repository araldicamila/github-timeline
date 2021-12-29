import { render, screen } from "@testing-library/react";
import { HeaderTimeline } from ".";

describe("HeaderTimeline component", () => {
  it("Render correctly", () => {
    render(<HeaderTimeline username="anakin-skywalker" />);

    expect(screen.getByText("Hello, anakin-skywalker")).toBeInTheDocument();
  });
});
