import { render } from "@testing-library/react";

import Button, { ButtonTypes } from "components/Button/Button";

test("Should render a button", () => {
	const { asFragment, getByRole } = render(<Button type={ButtonTypes.PRIMARY}>Click me</Button>);
	expect(getByRole("button")).toBeInTheDocument;
	expect(asFragment()).toMatchSnapshot();
});

test("Should render a disabled button", () => {
	const { asFragment, getByRole } = render(<Button type={ButtonTypes.PRIMARY} disabled>Click me</Button>);
	expect(getByRole("button")).toBeDisabled;
	expect(asFragment()).toMatchSnapshot();
});
