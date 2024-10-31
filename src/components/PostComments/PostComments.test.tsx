import { render, screen, fireEvent } from "@testing-library/react";
import Post from ".";

describe("Testes de comentários", () => {
    test("Deve adicionar dois comentários na lista", () => {
        render(<Post />);

        fireEvent.change(screen.getByTestId("comment-input"), {
            target: { value: "Primeiro comentário" }
        });
        fireEvent.click(screen.getByTestId("submit-button"));
        
        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("comment-input"), {
            target: { value: "Segundo comentário" }
        });
        fireEvent.click(screen.getByTestId("submit-button"));

        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
    });
});
