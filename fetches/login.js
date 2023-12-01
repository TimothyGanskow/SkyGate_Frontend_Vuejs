
import axios from "axios"


/* Death -> actual call of the requests */
export default function login(email, password) {
  let res;
  axios.post("http://localhost:3000/index.php/login",
    {
      email: email,
      passwort: password
    }).then(response => {
      sessionStorage.setItem('session', response.data.sessionToken)
      if (response.status === 200) {
        res = response.status;
      } else {
        res = false;
      }

    }).catch(e => { res = false });


  return res;
}

