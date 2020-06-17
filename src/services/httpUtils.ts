export async function httpGet(url: string) {
    try {
        const response = await fetch(url);
        validateResponse(response);
        return response.json();
    } catch (error) {
        //process errors
        console.error(error);
    }
}

function validateResponse(response: Response) {
    if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
    }
}