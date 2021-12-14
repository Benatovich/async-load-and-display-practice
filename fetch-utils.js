// this key is the 'anonymous key'. it's okay to expose it publicly as long as we setup 'rls' security in our database
// a key is kind of like a password
// this was assigned to us by supabase for this project
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzY3MywiZXhwIjoxOTU1MDgzNjczfQ.T4j8T8PmMQvcyTO4egZ0EUIxHwmUeklr4DArTmn6mc0';

// similarly, here's the url supabase assigned us for our database
const SUPABASE_URL = 'https://cnfgxcsilmdanstiixji.supabase.co';

// finally, here's the client object. this object is how we will get data from our database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getTheories() {
    const response = await client
        .from('conspiracy-theories')
        .select();

    // console.log(response.data);
    return response.data;
}
export async function getRats() {
    const response = await client
        .from('rats')
        .select();

    console.log(response.data);
    return response.data;
}
export async function getCandy() {
    const response = await client
        .from('candy')
        .select();

    console.log(response.data);
    return response.data;
}

// export async function getCars() {
//     const response = await client
//         .from('cars')
//         .select(`
//         *,
//         makes (*)
//     `);

//     console.log(response.data);
//     return response.data;
// }
