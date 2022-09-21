import React from "react";

function Links(props) {
    return(
     <>
     <h3>Links</h3>
     <a href={props.github}>{props.github}</a>
     <a href={props.linkedIn}>https://www.linkedin.com/in/liza/</a>
     </>
    )
   }

   export default Links