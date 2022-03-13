import 'antd/dist/antd.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Form, FormProps, Input, InputNumber, Space } from 'antd';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';
// import { useState } from 'react';

type FormFields= {
  lotValue: number
  lotName: string
  lotDepartment: string
  lotMunicipality: string
}

const createPredioMutation = gql`
  mutation createPredioMutation($input:PersonaInput) {
    CreatePredio(input: $input) {
      id,
      lotValue,
      lotName,
      lotDepartment,
      lotMunicipality
    }
  }
`

const predioQuery = gql`
  query predioQuery($id:ID!) {
    persona(id: $id) {
      id,
      lotValue,
      lotName,
      lotDepartment,
      lotMunicipality
    }
  }
`

const formProps:FormProps={
  name:'personaform',
  autoComplete:'off',
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const PredioEditorComponent = ()=>{
  const router=useRouter()
  const theQuery=router.query.id
  const { data } = useQuery(predioQuery, {variables: {id: theQuery}})
  const form = useRef(null)
  const [predioMutation] = useMutation(createPredioMutation)

  useEffect(()=> {
    if(data && data.persona) {
      form.current.setFieldsValue(data.persona)
    }
  },[data])
  
  const updateFields = async (formFields:FormFields)=> {
    const input = {
      ...formFields,
      id: theQuery || null
    }
    const { data } = await predioMutation({
      variables: {
        input
      }
    })
    if (!data) throw new Error('something went wrong')
    form.current.setFieldsValue(data.CreatePersona)
    router.push('personas-manager')
  }

  return (
    <>
      <Form onFinish={updateFields} initialValues={data?.persona} {...formProps} ref={form}>
        <Form.Item label='Nombre' name='lotName'><Input/></Form.Item>
        <Form.Item label='Departamento' name='lotDepartment'><Input/></Form.Item>
        <Form.Item label='Municipio' name='lotMunicipality'><Input/></Form.Item>
        <Form.Item label='Avalúo' name='lotValue'><InputNumber/></Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Guardar</Button>
          <Space size='small'></Space>
          <Link href='predios-manager'><a><Button>Regresar</Button></a></Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default PredioEditorComponent