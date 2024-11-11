// import Image from "next/image";

export default function CountryName({ params }: any) {

    const countries: {
        name: string,
        population: number,
        capital: string,
    }[] = [{
        name: "Pakistan",
        population: 21690909,
        capital: "Islamabad",
    },
    {
        name: "India",
        population: 77790909,
        capital: "Delhi",
    },
    {
        name: "Japan",
        population: 88690909,
        capital: "Tokyo",
    }]

    function findCountry(country_url: string) {
        return countries.find(country => country.name == country_url)                             // bracket k andar jo country arrow se pehle wo variable hai us ki jagah ham kuch bhi likh sakta hain
    }

    let result = findCountry(params.country_name)   





    return (
        <div>
            {
                result ? (
                    <>
                        <h1>Country Name: {result.name}</h1>
                        <h1>Country Capital: {result.capital} </h1>
                        <h1>Country Population: {result.population} </h1>
                    </>
                ) : (
                    // <h1>{params.country_name} Not found</h1>
                    <h1>Country Not Found</h1>
                )
            }

        </div>
    );
}