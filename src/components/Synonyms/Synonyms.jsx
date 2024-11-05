import React from "react";

export default function Synonyms({synonyms}) {
    console.log(synonyms);
    return (
    <ul className="synonyms">
        {synonyms.map((synonym, index) => (
            <li 
            key={index} 
            className="synonym"
            >
            {synonym}
            </li>)
            )}
    </ul>
    )
}