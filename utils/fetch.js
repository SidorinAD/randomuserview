import { URL } from "../const/const.js";
import { userFormatter } from "./userFormatter.js";

export const fetchData = () => {
  const loadedUsers = fetch(URL)
    .then(res => res.json())
    .then(res => res.results.map(userFormatter))
    .catch((err) => console.log(err));

   return loadedUsers
}
  
