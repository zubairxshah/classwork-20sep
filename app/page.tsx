import Heading from "./components/heading";
import Paragraph from "./components/paragraph";
import SubHeading from "./components/subheading";

export default function Home() {
  return (
    <div>
      <div>
        {/* Generic messages using simple HTML tags*/}
        {/*HTML elements won't work since we have styling rules as Tailwind CSS*/}
        <h1>Welcome to NextJS App</h1>
        <h2>Static Part</h2>
        <p>This is a simple Next.js application.</p>
        <br></br>
      </div>
      <div>
        {/* Dynamic messages using TSX */}
        <Heading name="John" lastname="Doe" />
        <SubHeading text="Dynamic H2 element" />
        <Paragraph line="This is a dynamic paragraph." />
      </div>
      <div>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
