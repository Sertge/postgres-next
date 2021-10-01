import PageContainer from "components/page-container";
import {Client} from "pg"
import useSWR from 'swr'

const fetcher = (query)=>
  fetch('/api/graphql',{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({query})
  })
    .then((res)=>res.json())
    .then((json)=>json.data)

const IndexPage=(props:any)=>{
  const{data,error} = useSWR('{personas {name}}',fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)
  
  return (
    <PageContainer>
      <div>
        <h1>This is the main page</h1>
        <h2>Here we try to call something from PostgreSQL client</h2>
        <p>Lets log it</p>
        {props.resultVar.map((columns:{[key:string]:number},index:number)=>{
          let theKey = Object.keys(columns)[0]
          return(
            <div key={index}>
              <h3>{theKey}</h3>
              <p>{columns[theKey]}</p>
            </div>
          )
          
        })}
        <p>Yay, it worked!</p>
      </div>
    </PageContainer>
  )
}

export async function getStaticProps(){
  const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl: false
  })
  await client.connect();
  let {rows:resultVar}=await client.query({text:"SELECT 2+2"})
  return {
    props: {resultVar}
  }
}

export default IndexPage