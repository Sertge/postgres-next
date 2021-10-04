const queryFetcher = (query:string)=>
  fetch('/api/graphql',{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({query})
  })
    .then((res)=>res.json())
    .then((json)=>json.data)
    
export default queryFetcher 