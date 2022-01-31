const queryFetcher = (mutation:{mutationName:String, params:any})=> {
  const stringMutation = `mutation{${mutation.mutationName}(input:${JSON.stringify(mutation.params)}){id,firstName}}`
  console.log(stringMutation)
  return fetch('/api/graphql',{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(stringMutation)
  })
    .then((res)=>res.json())
    .then((json)=>json.data)
}
    
export default queryFetcher 