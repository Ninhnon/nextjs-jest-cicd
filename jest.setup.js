// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: "/",
    };
  },
}));
