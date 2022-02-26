import PageContainer from "components/page-container";
import CommonHeader from "components/common-header";
import ClientOnly from "components/ClientOnly";
import "antd/dist/antd.css";
import Link from 'next/link'
import { Table, Button, Space } from "antd";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const personasQuery = gql`
  query {
    personas {
      id
      firstName
      lastName
      compName
    }
  }
`

const PersonasManagerPage= ()=>{
  const router = useRouter()
  const { data, loading, error } = useQuery(personasQuery)
  const shouldRedirect = !(loading || error || data)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/')
    }
  },[shouldRedirect])
  if (error) return <div>{error.message}</div>

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
      <ClientOnly>
        <CommonHeader/>
        <Button type="primary" href='edit-persona'>Agregar una persona</Button>
        {data
          ?<Table columns={columns} dataSource={data.personas}/>
          :<div>Loading...</div>
        }
      </ClientOnly>
    </PageContainer>
  )
}

export default PersonasManagerPage