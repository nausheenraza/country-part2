import Link from "next/link";
export default function CountryName(data: { countryinfo?: { name: string; population: number; capital: string }; url: string }) {
    return (
      <div>
        {data.countryinfo ?(
          <div>
            
            
            <h1>country Name : {data.countryinfo.name}</h1>
            <h1>country population : {data.countryinfo.population}</h1>
            <h1>country capital : {data.countryinfo.capital}</h1>
           <Link href="/"style={{margin:"10px",border:"2px solid black",padding:"10px"}}>Back</Link>
          </div>
        ) :(
          <div>
            <h1>{data.url} not found</h1>
            <Link href="/"style={{margin:"10px",border:"2px solid black",padding:"10px"}}>Back</Link>
          </div>
        ) }
      </div>
    );
  }
  