module.exports = function (name) { 
    let date = new Date();
    let hour = date.getHours();
    let greetings = '';
      if(hour >= 0 && hour < 5){
        greetings = 'Good night'
      }
      if(hour >= 5 && hour < 12){
        greetings = 'Good morning'
      }
      if(hour >= 12 && hour < 17){
        greetings = 'Good afternoon'
      }
      if(hour >= 17 && hour <= 23){
        greetings = 'Good evening'
      }

    let res = `<div>Date of request: ${date.toString().slice(0, 33)}</div>
               <div>${greetings}, ${name}</div>`
    return res
};


  