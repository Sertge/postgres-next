import 'antd/dist/antd.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Form, FormProps, Input, Select, InputNumber, Space } from 'antd';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';
// import { useState } from 'react';

type FormFields= {
  docNumber: number
  phoneNumber: number
  firstName: string
  lastName: string
  compName: string
}

const createPersonaMutation = gql`
  mutation createPersonaMutation($input:PersonaInput) {
    CreatePersona(input: $input){
      id,
      firstName,
      lastName,
      compName,
      docType,
      docNumber,
      email,
      address,
      phoneNumber
    }
  }
`

const personaQuery = gql`
  query personaQuery($id:ID!) {
    persona(id: $id){
      id,
      firstName,
      lastName,
      compName,
      docType,
      docNumber,
      email,
      address,
      phoneNumber,
    }
  }
`

const formProps:FormProps={
  name:'personaform',
  autoComplete:'off',
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const PersonaEditorComponent = ()=>{
  const router=useRouter()
  const theQuery=router.query.id
  const { data } = useQuery(personaQuery, {variables: {id: theQuery}})
  const form = useRef(null)
  const [personaMutation] = useMutation(createPersonaMutation)

  useEffect(()=> {
    if(data && data.persona) {
      form.current.setFieldsValue(data.persona)
    }
  },[data])
  
  const updateFields = async (formFields:FormFields)=> {
    const input = {
      ...formFields,
      firstName: formFields.firstName || null,
      lastName: formFields.lastName || null,
      compName: formFields.compName || null,
      id: theQuery || null
    }
    const { data } = await personaMutation({
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
        <Form.Item label='Nombres' name='firstName'><Input/></Form.Item>
        <Form.Item label='Apellidos' name='lastName'><Input/></Form.Item>
        <Form.Item label='Tipo de documento' name='docType'>
          <Select>
            <Select.Option value='CC'>Cédula de ciudadanía</Select.Option>
            <Select.Option value='NIT'>NIT</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Numero de documento' name='docNumber'><InputNumber/></Form.Item>
        <Form.Item label='Razón social' name='compName'><Input/></Form.Item>
        <Form.Item label='Correo electrónico' name='email'><Input/></Form.Item>
        <Form.Item label='Dirección' name='address'><Input/></Form.Item>
        <Form.Item label='Teléfono' name='phoneNumber' ><InputNumber/></Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Guardar</Button>
          <Space size='small'></Space>
          <Link href='personas-manager'><a><Button>Regresar</Button></a></Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default PersonaEditorComponent