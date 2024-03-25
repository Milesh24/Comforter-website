const API_URL = 'live_nB6pAZRPN8hOylRtRWFbkYiHPLeRJhBp9gYQFjMr8i8kSJC0pFOyLu99JjPXXgOO';


export async function fetchData(searchTerm = '') {
    try {
        const response = await fetch(API_URL + `?search=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data:', error.message);
    }
}

export async function postData(newComforter) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComforter),
        });
        if (!response.ok) {
            throw new Error('Failed to post data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error posting data:', error.message);
    }
}