import { render, screen } from "@testing-library/react";
import { TimelineItem } from ".";

describe("TimelineItem component", () => {
  it("Render correctly", () => {
    render(
      <TimelineItem
        name="test-library"
        description="Lorem ipsum"
        createdAt="2021-11-09T13:25:39Z"
      />
    );

    expect(screen.getByText("test-library")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("09/11/2021")).toBeInTheDocument();
  });
});
