var url="http://localhost:7070/api/states/";
export function getStates(){
    return fetch(url)
    .then(response=>{
        return response.json();
    })
}

export function getState(id){
    return fetch(url+id)
    .then(response=>{
        return response.json();
    })
}

export function create(opts){
    
    return fetch(url, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  });
}

export function update(opts){
    
    return fetch(url+opts.id, {
    method: 'put',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  });
}

export function test(opts){
    
   console.log(opts);
}
