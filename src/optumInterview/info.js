import React, { useEffect, useState } from 'react';
import Timer from './timer';

const Info = () => {
    const [loginInfo, setLoginInfo] = useState("please login");

    const callAsyncApi = async (url) => {
        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            return jsonData.fact;
        }catch(error) {
            return error.message;
        }
    }

    const handleAsyncCall = async () => {
        const awaitedData = await callAsyncApi("https://catfact.ninja/fact");
        setLoginInfo(awaitedData);
    }

    useEffect(() => {
        const factCall = async () => {
            await handleAsyncCall();
        }
        factCall();
    }, []);


    return (
        <div>
            <p>{loginInfo}</p>
            <button onClick={handleAsyncCall} >{'Change Message'}</button>
            <Timer />
        </div>
    )
}

export default Info;