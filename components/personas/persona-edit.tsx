import "antd/dist/antd.css";
// import Link from 'next/link'
import {useRouter} from 'next/router'
import { Button,Form, FormProps, Input,Select } from "antd";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";
// import { useState } from "react";

const createPersonaMutation = gql`
  mutation {
    createPersona(input: $input){
      id,
      firstName,
      lastName
    }
  }
`

const personaQuery = gql`
  query personaQuery($id:ID!) {
    persona(id: $id){
      id,
      firstName,
      lastName,
      compName
    }
  }
`

const formProps:FormProps={
  name:'personaform',
  onFinish:async (input)=> {
    input.docNumber = parseInt(input.docNumber)
    input.phoneNumber = parseInt(input.phoneNumber)
    input.firstName = input.firstName || null
    input.lastName = input.lastName || null
    input.compName = input.compName || null
    const [personaMutation] = useMutation(createPersonaMutation)
    const { data } = await personaMutation({
      variables: {
        input
      }
    })
    if (!data) throw new Error('something went wrong')
  },
  autoComplete:'off',
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const PersonaEditorComponent = ()=>{
  const router=useRouter()
  const theQuery=router.query.id
  const { data } = useQuery(personaQuery, {variables: {id: theQuery}})
  const form = useRef(null)

  useEffect(()=> {
    if(data && data.persona)
    form.current.setFieldsValue(data.persona)
  },[data])
  
  return (
    <>
      <Form initialValues={data?.persona} {...formProps} ref={form}>
        <Form.Item label="Nombres" name="firstName"><Input/></Form.Item>
        <Form.Item label="Apellidos" name="lastName"><Input/></Form.Item>
        <Form.Item label="Tipo de documento" name="docType">
          <Select>
            <Select.Option value="CC">Cédula de ciudadanía</Select.Option>
            <Select.Option value="NIT">NIT</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Numero de documento" name="docNumber"><Input/></Form.Item>
        <Form.Item label="Razón social" name="compName"><Input/></Form.Item>
        <Form.Item label="Correo electrónico" name="email"><Input/></Form.Item>
        <Form.Item label="Dirección" name="address"><Input/></Form.Item>
        <Form.Item label="Teléfono" name="phoneNumber"><Input/></Form.Item>
        <Form.Item><Button type="primary" htmlType="submit">Guardar</Button></Form.Item>
      </Form>
    </>
  )
}

export default PersonaEditorComponent