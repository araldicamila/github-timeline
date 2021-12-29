import { render, screen, fireEvent } from "@testing-library/react";

import { SearchUser } from ".";

const setup = () => {
  const utils = render(<SearchUser setUser={() => {}} />);
  const input = utils.getByLabelText("input-username");
  return {
    input,
    ...utils,
  };
};

test("Accept values", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "lukeskywalker" } });

  expect(input.value).toBe("lukeskywalker");
});
