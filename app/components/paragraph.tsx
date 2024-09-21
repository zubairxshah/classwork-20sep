import React from 'react';

interface Props{
    line: string
}
export default function Paragraph(props:Props){
    return(
<p>{props.line}</p>)
}