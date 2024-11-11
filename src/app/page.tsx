// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <body>
    <div className="Home-div">
      <h1>Country list</h1>
      <Link className="a1  a" href="/country/Pakistan">Pakistan</Link>
      <Link className="a2  a" href="/country/India">India</Link>
      <Link className="a3  a" href="/country/Japan">Japan</Link>
    </div>
    </body>
  );
}
