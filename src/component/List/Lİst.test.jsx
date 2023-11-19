import { expect, it, test } from "vitest";
import List from ".";
import { render, screen, within } from "@testing-library/react";
import { users } from "../../constants/constants";

//Red to Green
// TDD or Test Driven Development
it("List satir sayısı test", () => {
  render(<List users={users} />);

  const body = screen.getByTestId("table-body");
  const rows = within(body).getAllByRole("row");
  expect(rows).toHaveLength(users.length);
});

it("User email-name-age check", () => {
  render(<List users={users} />);
  for (const user of users) {
    screen.getByText(user.name);
    screen.getByRole("cell", { name: user.email });
    screen.getByText(user.age);
  }
});
