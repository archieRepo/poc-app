import { useState } from 'react';

const useApiHooks = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchApi = async (url, method='GET', body=null) => {
        try{
            const res = await fetch(url, {
                method,
                body: body? JSON.stringify(body) : null
            });
            if(!res.ok) {
                throw new Error(`error: ${res.status}`);
            }
            const jsonRes = await res.json();
            setData(jsonRes);
            return jsonRes;
        }
        catch (err){
            setError(err.message || 'error occured');
        }
        finally {
            setLoading(false);
        }
    }

    return {data, error, loading, fetchApi}
}

export default useApiHooks;