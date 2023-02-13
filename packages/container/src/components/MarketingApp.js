import {mount} from 'marketing/Index';
import React, {useEffect, useRef} from "react";

// const app =
export default ()=>{
    const ref=useRef(null);

    useEffect(()=>{
        mount(ref.current);
    });

    return <div ref={ref}></div>
}