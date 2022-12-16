import { useState } from "react";

const List = (props) => {
  const [flag] = useState(true);
  return(
    <h1
     className={ flag ? 'bgBlue' : 'bgRed'} 
     style={{ color : flag ? 'red' : 'orange' }}
    >
      {props.data.name}
    </h1>
  )
}

export default List;
