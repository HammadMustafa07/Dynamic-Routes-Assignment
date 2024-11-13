// import Image from "next/image";

interface Country {
    name: string;
    population: number;
    capital: string;
}

interface CountryNameProps {
    params: {
        country_name: string;
    };
}

const countries: Country[] = [
    { name: "Pakistan", population: 21690909, capital: "Islamabad" },
    { name: "India", population: 77790909, capital: "Delhi" },
    { name: "Japan", population: 88690909, capital: "Tokyo" }
];

export default function CountryName({ params }: CountryNameProps) {
    function findCountry(countryUrl: string) {
        return countries.find(country => country.name.toLowerCase() === countryUrl.toLowerCase());
    }

    const result = findCountry(params.country_name);

    return (
        <div>
            {result ? (
                <>
                    <h1>Country Name: {result.name}</h1>
                    <h1>Country Capital: {result.capital}</h1>
                    <h1>Country Population: {result.population}</h1>
                </>
            ) : (
                <h1>Country Not Found</h1>
            )}
        </div>
    );
}


// interface Country {
//     name: string;
//     population: number;
//     capital: string;
// }

// interface CountryNameProps {
//     params: {
//         country_name: string;
//     };
// }

// const countries: Country[] = [
//     { name: "Pakistan", population: 21690909, capital: "Islamabad" },
//     { name: "India", population: 77790909, capital: "Delhi" },
//     { name: "Japan", population: 88690909, capital: "Tokyo" }
// ];

// export default function CountryName({ params }: CountryNameProps) {
//     function findCountry(countryUrl: string) {
//         return countries.find(country => country.name.toLowerCase() === countryUrl.toLowerCase());
//     }

//     const result = findCountry(params.country_name);

//     return (
//         <div>
//             {result ? (
//                 <>
//                     <h1>Country Name: {result.name}</h1>
//                     <h1>Country Capital: {result.capital}</h1>
//                     <h1>Country Population: {result.population}</h1>
//                 </>
//             ) : (
//                 <h1>Country Not Found</h1>
//             )}
//         </div>
//     );
// }