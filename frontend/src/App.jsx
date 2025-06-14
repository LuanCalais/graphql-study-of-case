import { Authors, Books, CreateBook } from "./components";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 GraphQL Books Frontend</h1>
      <Authors />
      <Books />
      <CreateBook />
    </div>
  );
}
