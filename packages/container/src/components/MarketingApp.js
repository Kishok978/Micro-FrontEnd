import {mount} from 'marketing/MarketingApp';
import React, {useEffect, useRef} from "react";

export default ()=>{
    const ref=useRef(null);

    useEffect(()=>{
        mount(ref.current, {
            onNavigate: ({pathname}) => {
                console.log('Navigating in marketing',pathname )
            }
        });
    });

    return <div ref={ref}></div>
}