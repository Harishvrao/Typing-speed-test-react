import React, { useEffect, useRef } from "react";

function Word(props) {
    const { text, active, correct } = props;
  
    const rerender = useRef(0)
    useEffect(() => {rerender.current += 1})
  
    if (correct === true){return  <span className="correct">{text}({rerender.current}) </span>}
    if (correct === false){return  <span className="incorrect">{text}({rerender.current}) </span>}
    if (active){return  <span className="active">{text}({rerender.current}) </span>}
    return <span>{text}({rerender.current}) </span>;
  }

  export default Word = React.memo(Word)

