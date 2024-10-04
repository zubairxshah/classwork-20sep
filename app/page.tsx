import Heading from "./components/heading";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        {/* Generic messages using simple HTML tags*/}
        {/*HTML elements won't work since we have styling rules as Tailwind CSS*/}
        <h1>Welcome to NextJS App</h1>
        <br></br>
      </div>
      <div>
        {/* Dynamic messages using TSX */}
        <Heading text="Dynamic Routing App" />
        <div className="mt-4 text-xl text-blue-600 hover:text-blue-800 mb-4">
            <Link href="/user">Go to User List</Link>
        </div>
      </div>
      <div>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
