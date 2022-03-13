import 'antd/dist/antd.css';
import Link from 'next/link'
import { Table, Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const prediosQuery = gql`
  query {
    predios {
      id,
      lotName,
      lotValue
    }
  }
`

const PrediosManagerComponent = ()=>{
  const router = useRouter()
  const { data, loading, error } = useQuery(prediosQuery)
  const shouldRedirect = !(loading || error || data)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/')
    }
  },[shouldRedirect])
  // if (error) return <div>{error.message}</div>

  console.log(data)
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'lotName',
      key: 'lotName'
    },
    {
      title: 'Valor',
      dataIndex: 'lotValue',
      key: 'lotValue'
    },
    {
      title: 'Acciones',
      key: 'Actions',
      render: (_text:string, record:any) => (<Space size='middle'>
        <Link href={`edit-predio?id=${record.id}`}><a>Editar Registro</a></Link>
      </Space>)
    },
    {
      title: 'Lote',
      key: 'Land',
      render: (_text:string, record:any) => (<Space size='middle'>
        {
          record.lot
            ? <p>record.lot.terrArea</p>
            : <Link href={`add-land?id=${record.id}`}><a>Agregar Terreno</a></Link>
        }
      </Space>
        
      )
    }
  ]

  return (
      <div>
        <Button type='primary' href='edit-predio'>Agregar un predio</Button>
        <div>
          {loading
            ?<div>Loading...</div>
            :<Table dataSource={data?.predios} columns={columns}/>
          }
        </div>
      </div>
  )
}

export default PrediosManagerComponent