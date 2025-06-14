import { Authors, Books, CreateBook, Navbar } from "./components";

export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Authors />
      <Books />
      <CreateBook />
    </div>
  );
}
