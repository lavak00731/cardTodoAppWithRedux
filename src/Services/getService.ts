const getService = async (url:string, signal:AbortSignal) => {
    try {
        const response = await fetch(url, {signal});
        if(response.ok) {
            const data = await response.json();
            return data;
        }        
    } catch (error) {
        console.log(error)
    }
    
}
export default getService;