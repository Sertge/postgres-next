import PageContainer from "components/page-container";
import CommonHeader from "components/common-header";
import "antd/dist/antd.css";
// import Link from 'next/link'
import {useRouter} from 'next/router'
import { Button,Form, FormProps, Input,Select } from "antd";
import axios from "axios";

const formProps:FormProps={
  name:'personaform',
  onFinish:(values)=>{console.log(values)},
  autoComplete:'off',
  labelCol: { span: 3 },
  wrapperCol: { span: 18 }
}

const PersonaEditorPage = ()=>{
  const router=useRouter()
  const theQuery=router.query.id
  const query=`{persona(id:${theQuery}){docNumber}}`
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