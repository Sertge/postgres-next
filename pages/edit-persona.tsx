import PageContainer from "components/page-container";
import CommonHeader from "components/common-header";
import "antd/dist/antd.css";
// import Link from 'next/link'
import {useRouter} from 'next/router'
import { Button,Form, FormProps, Input,Select } from "antd";
import axios from "axios";

const formProps:FormProps={
  name:'personaform',
  onFinish:(values)=> {
    values.docNumber = parseInt(values.docNumber)
    values.phoneNumber = parseInt(values.phoneNumber)
    values.firstName = values.firstName || null
    values.lastName = values.lastName || null
    values.compName = values.compName || null
    const _payload = Object.keys(values).map(key => `${key}:${values[key]}`).join(',')
    const query = `mutation{CreatePersona(input:{${_payload}){id,firstName}}`
    axios.post('/api/graphql',{query}).catch((err)=>console.log(err))
  },
  autoComplete:'off',
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const PersonaEditorPage = ()=>{
  const router=useRouter()
  const theQuery=router.query.id
  const query=`{persona(id:${theQuery}){id,firstName,lastName,compName,docNumber}}`
  const data=axios.post(theQuery?'/api/graphql':null,{query}).then(res=>res).catch(()=>{})
  console.log(data)
  
  return (
    <PageContainer>
      <CommonHeader/>
      <Form {...formProps}>
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
    </PageContainer>
  )
}

export default PersonaEditorPage