const REBRICKABLE_KEY = "0c63c509a98ed0afe5dfb6730310b8cb";
const USER_TOKEN =
  "4967dd0072684ca41b5456e5ce95e74a11f4391c14a63ade4f2cb5f845a3bbe8";
const SET_LIST_ID = "825086";

export const fetchWishlist = () => {
  return fetch(
    `https://rebrickable.com/api/v3/users/${USER_TOKEN}/setlists/${SET_LIST_ID}/sets/`,
    {
      headers: {
        Authorization: "key " + REBRICKABLE_KEY
      }
    }
  )
    .then((response) => response.json())
    .then((json) => json.results);
};

export const searchSets = (searchTerm) => {
  return fetch(
    `https://rebrickable.com/api/v3/lego/sets/?ordering=ayear&search=${searchTerm}`,
    {
      headers: {
        Authorization: "key " + REBRICKABLE_KEY,
        "Content-Type": "application/json"
      }
    }
  )
    .then((response) => response.json())
    .then((json) => json.results);
};

export const addSetToList = (setNum) => {
  return fetch(
    `https://rebrickable.com/api/v3/users/${USER_TOKEN}/setlists/${SET_LIST_ID}/sets/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "key " + REBRICKABLE_KEY
      },
      body: JSON.stringify({ set_num: setNum })
    }
  ).then((response) => response.json());
};
