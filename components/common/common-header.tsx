import { PageHeader, PageHeaderProps, Button } from "antd";
import Link from "next/link";

const CommonHeader =()=>{
  const headerProps: PageHeaderProps = {
    title: "Sistema de gestión de catastro",
    subTitle:
      "Página principal",
    ghost: false,
    className: "site-page-header",
    extra: [
      <Link href="/" key="1">
        <a >
          <Button type="primary">
            Inicio
          </Button>
        </a>
      </Link>,
      <Link href="/predios-manager" key="2">
        <a>
          <Button>Predios</Button>
        </a>
      </Link>,
      <Link href="/personas-manager" key="3">
        <a>
          <Button>Propietarios</Button>
        </a>
      </Link>,
      <Link href="/about" key="4">
        <a>
          <Button>Ayuda</Button>
        </a>
      </Link>,
      <Button key="5">Salir</Button>,
    ],
    breadcrumb:{routes:[{path:'/',breadcrumbName:'inicio'}]}
  };
  return (
    <PageHeader {...headerProps}></PageHeader>
  )

}


export default CommonHeader