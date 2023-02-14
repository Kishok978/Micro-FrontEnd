import React from 'react';
import MarketingApp from "./components/MarketingApp";

export default () => {
    return (
        <div>
            <div className={'containerApp'}>
                <h1> Container App.... </h1>
                {/*<button className={'loginButton'}>Login</button>*/}
            </div>
            <hr/>
            <MarketingApp/>
        </div>
    )
}