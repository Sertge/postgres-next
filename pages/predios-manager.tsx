import PageContainer from "components/common/page-container";
import CommonHeader from "components/common/common-header";
import "antd/dist/antd.css";
import { Table,Button, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const prediosQuery = gql`
  query predios {
    id,
    lotName,
    lotValue
  }
`

const PrediosManagerPage = ()=>{
  const router = useRouter()
  const { data, loading, error } = useQuery(prediosQuery)
  const shouldRedirect = !(loading || error || data)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/')
    }
  },[shouldRedirect])
  if (error) return <div>{error.message}</div>

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