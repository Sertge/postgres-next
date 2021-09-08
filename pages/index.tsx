import PageContainer from "components/page-container";
import {Client} from "pg"

const IndexPage=(props:any)=>{
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
    ssl: {
      rejectUnauthorized: false
    }
  })
  await client.connect();
  let {rows:resultVar}=await client.query({text:"SELECT 2+2"})
  return {
    props: {resultVar}
  }
}

export default IndexPage