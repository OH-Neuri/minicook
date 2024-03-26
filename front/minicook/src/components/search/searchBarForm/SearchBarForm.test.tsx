import { render, screen } from "@testing-library/react";
import SearchBarForm from ".";

const SearchBarFormProps = {
  onSearchClick: jest.fn(),
  onChangeInput: jest.fn(),
};

describe("Input test", () => {
  test("should display empty in input on initial render", () => {
    render(<SearchBarForm {...SearchBarFormProps} />);

    const inputNode = screen.getByPlaceholderText(
      "재료, 요리명 등 다양하게 검색해보세요! (예: 마늘)"
    );
    expect(inputNode).toHaveValue("");
  });
});
