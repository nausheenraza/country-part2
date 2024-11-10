import "@/app/globals.css";
import Link from "next/link";
import Country from "@/app/components/country";



export default function countryname({params}:any) {

    const countries:{
        name: string,
        population: number,
        capital: string ,
    } []= [{

            name: "Pakistan",
            population: 216000000,
            capital: "Islamabad",
           },
           {

            name: "India",
            population: 4573475656564,
            capital: "Delhi",
            },
            {

                name: "japan",
                population: 7665455466,
                capital: "tokiyo",
            },
        ];

        function findcountry(country_url:string){
    
        return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
 
        }

       let result = findcountry(params.country_name)


    return (
        <div>

           <Country countryinfo = {result} url = {params.country_name} />
           {/* <div>
        {
            result ? (
                <>
                   <h1>Country Name:{result.name}</h1>
                   <h1>country capital:{result.capital}</h1>
                   <h1>country population:{result.population}</h1>
                </>
            ) :(
                <h1>{params.country_name} Not Found</h1>
            )
        }



       
       
      </div> */}
    </div>
    );
  }