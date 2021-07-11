import url from './const';

const getData = function(){
  fetch(url) 
    .then(res => res.json())
    .then(data => {
      ncosole.log(data.results[0].name)
      let users = data.results;
      console.log(users)
      return users;
      
    })
}

export default getData;