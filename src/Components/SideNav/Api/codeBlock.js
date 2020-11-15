import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock() {
    return(
        <CopyBlock
    text={b}
    language={"json"}
    // showLineNumbers={showLineNumbers}
    theme={dracula}
    // codeBlock
  />
    );
  
}
export default MyCoolCodeBlock;
var b = {
    "place": {
        "id": 394605,
        "distance_within_meters": 0,
        "address": "Charigram",
        "area": " Singair",
        "city": " Manikganj",
        "postCode": 1820,
        "location_type": "Rural",
        "district": "Manikganj",
        "country": "Bangladesh",
        "sub_district": "Singair",
        "union": "Charigram",
        "pauroshova": null
    },
    "status": 200
} 
