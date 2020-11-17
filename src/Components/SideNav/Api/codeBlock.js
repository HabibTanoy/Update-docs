import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock() {
    return(
        <CopyBlock
    text={a}
    language={"javascript"}
    theme={dracula}
    showLineNumbers={false}
    codeBlock
  />
    );
  
}
export default MyCoolCodeBlock;
let a = `https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true`
