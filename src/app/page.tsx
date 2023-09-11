import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import "./index.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 pb-96 main-component">
      <Section1 />
      <Section2 />
      <Section3 />
    </main >
  );
}
