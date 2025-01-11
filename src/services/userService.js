import axios from 'axios';
const API_URL = 'https://randomuser.me/api/';
const usersNumber = 1005;
export async function fetchUsers(count = usersNumber) {
    const response = await axios.get(`${API_URL}?results=${count}`);
    return response.data.results.map((user) => ({
        image: user.picture.thumbnail,
        name: user.name.first + " " + user.name.last,
        email: user.email,
        username: user.login.username,
        country: user.location.country,
        nat: user.nat,
        registrationDate: user.registered.date,
    }));
}
