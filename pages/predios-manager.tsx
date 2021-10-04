import PageContainer from "components/page-container";
import CommonHeader from "components/common-header";
import "antd/dist/antd.css";
import useSWR from 'swr'
import queryFetcher from "api-utils/fetchers/query-fetcher";
import { Table,Button, Space } from "antd";
import Link from "next/link";

const PrediosManagerPage = ()=>{
  const{data,error} = useSWR('{predios{lotName, lotValue}}',queryFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return 

  console.log(data)
  const columns = [
    {
      tittle:'Nombre',
      dataIndex:'lotName',
      key:'lotName'
    },
    {
      tittle:'Valor',
      dataIndex:'lotValue',
      key:'lotValue'
    },
    {
      tittle:'Acciones',
      key:'Actions',
      render:(_text:string,record:any)=>(<Space size='middle'>
        <Link href={`edit-predio?id=${record.id}`}><a>Editar Registro</a></Link>
      </Space>)
    }
  ]

  return (
    <PageContainer>
      <div>
        <CommonHeader/>
        <Button type="primary" href='edit-predio'>Agregar un predio</Button>
        <div>
          {data
            ?<Table dataSource={data.predios} columns={columns}/>
            :<div>Loading...</div>
          }
          
        </div>
      </div>
    </PageContainer>
  )
}

export default PrediosManagerPage