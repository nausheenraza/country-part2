import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Country List</h1>
      <Link href="/country/India" style={{margin:"10px",border:"2px solid black",padding:"10px"}}>India</Link>
      <Link href="/country/Pakistan"style={{margin:"10px",border:"2px solid black",padding:"10px"}}>Pakistan</Link>
      <Link href="/country/Japan"style={{margin:"10px",border:"2px solid black",padding:"10px"}}>Japan</Link>
      <Link href="/country/london"style={{margin:"10px",border:"2px solid black",padding:"10px"}}>london</Link>
     
    </div>
  );
}
