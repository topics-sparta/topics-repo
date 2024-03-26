import { Navbar } from "../components/navbar";

export default function Layout({ children }) {
  return (
      <div className={"flex flex-col"}>
        <Navbar />
        {children}
      </div>
  );
}
