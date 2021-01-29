import axios from 'axios';

const USER_API_BASE_URL ="http://localhost/PHP-LOGIN/Login-backEnd/login.php"
const USER_API_BASE_URL2 = "http://localhost/PHP-LOGIN/Login-backEnd/loginlist.php"

class loginService{
    getUserById(email){
        return axios.get(USER_API_BASE_URL + '/' +email);

    }

    getuserList(email){
        return axios.get(USER_API_BASE_URL2 + '/' +email);
    }
}
export default new loginService();