import Cookies from "js-cookie";
function isAuthenticated() {
    let user_details = Cookies.get("userInfo")

    if(user_details === null || user_details === undefined) {
        return false;
    }

    return true;
}

export default isAuthenticated;