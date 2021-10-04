import PageContainer from "components/page-container";
import CommonHeader from "components/common-header";
import "antd/dist/antd.css";
import Link from 'next/link'
import useSWR from 'swr'
import queryFetcher from "api-utils/fetchers/query-fetcher";
import { Table,Button,Space } from "antd";


const PersonasManagerPage= ()=>{
  const{data,error} = useSWR('{personas{docNumber}}',queryFetcher)

  if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  console.log(data)
  const columns = [
    {
      tittle:'Nombre',
      dataIndex:'firstName',
      key:'firstName'
    },
    {
      tittle:'Apellido',
      dataIndex:'lastName',
      key:'lastName'
    },
    {
      tittle:'Razón social',
      dataIndex:'compName',
      key:'compName'
    },
    {
      tittle:'Acciones',
      key:'Actions',
      render:(_text:string,record:any)=>(<Space size='middle'>
        <Link href={`edit-persona?id=${record.id}`}><a>Editar Registro</a></Link>
      </Space>)
    }
  ]

  return (
    <PageContainer>
      <div>
        <CommonHeader/>
        <Button type="primary" href='edit-persona'>Agregar un predio</Button>
        {data
          ?<Table columns={columns} dataSource={data.personas}/>
          :<div>Loading...</div>
        }
      </div>
    </PageContainer>
  )
}

export default PersonasManagerPage