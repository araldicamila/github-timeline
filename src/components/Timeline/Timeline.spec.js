import { render, screen } from "@testing-library/react";
import { Timeline } from ".";

describe("Timeline component", () => {
  it("Render correctly", () => {
    render(
      <Timeline
        list={[
          {
            name: "test-library",
            description: "Lorem ipsum",
            created_at: "2021-11-09T13:25:39Z",
          },

          {
            name: "star-wars",
            description: "The empire strikes again",
            created_at: "1980-07-21T13:25:39Z",
          },
        ]}
      />
    );

    expect(screen.getByText("test-library")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("09/11/2021")).toBeInTheDocument();

    expect(screen.getByText("star-wars")).toBeInTheDocument();
    expect(screen.getByText("The empire strikes again")).toBeInTheDocument();
    expect(screen.getByText("21/07/1980")).toBeInTheDocument();
  });
});
