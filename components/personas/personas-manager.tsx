import 'antd/dist/antd.css';
import Link from 'next/link'
import { Table, Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { ColumnsType } from 'antd/lib/table';

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

const PersonasManagerComponent= ()=>{
  const router = useRouter()
  const { data, loading, error } = useQuery(personasQuery)
  const shouldRedirect = !(loading || error || data)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/')
    }
  },[shouldRedirect])
  if (error) return <div>{error.message}</div>

  const columns: ColumnsType = [
    {
      title:'Nombre',
      dataIndex:'firstName',
      key:'firstName'
    },
    {
      title:'Apellido',
      dataIndex:'lastName',
      key:'lastName'
    },
    {
      title:'Razón social',
      dataIndex:'compName',
      key:'compName'
    },
    {
      title:'Acciones',
      key:'Actions',
      render:(_text:string,record:any)=>(<Space size='middle'>
        <Link href={`persona-edit?id=${record.id}`}><a>Editar Registro</a></Link>
      </Space>)
    }
  ]

  return (
    <>
      <Button type='primary' href='persona-edit'>Agregar una persona</Button>
      {data
        ?<Table columns={columns} dataSource={data.personas}/>
        :<div>Loading...</div>
      }
    </>
  )
}

export default PersonasManagerComponent