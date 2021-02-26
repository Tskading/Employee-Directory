import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
    getUsers: function(numUsers) {
        return axios.get(BASEURL + `?results=${numUsers}`);

}
};

export default API;