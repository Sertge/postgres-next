import PageContainer from "components/page-container";
import Link from "next/link";
import { PageHeader, PageHeaderProps, Button } from "antd";
import "antd/dist/antd.css";
// import useSWR from 'swr'

// const fetcher = (query:string)=>
//   fetch('/api/graphql',{
//     method: 'POST',
//     headers:{
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify({query})
//   })
//     .then((res)=>res.json())
//     .then((json)=>json.data)

const IndexPage = () => {
  // const{data,error} = useSWR('{personas{docNumber}}',fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  // console.log(data)

  const headerProps: PageHeaderProps = {
    title: "Sistema de gestión de catastro",
    subTitle:
      "Página principal",
    ghost: false,
    className: "site-page-header",
    extra: [
      <Button key="1" type="primary">
        Inicio
      </Button>,
      <Link href="predios-manager">
        <a>
          <Button key="2">Predios</Button>
        </a>
      </Link>,
      <Link href="personas-manager">
        <a>
          <Button key="3">Propietarios</Button>
        </a>
      </Link>,
      <Link href="about">
        <a>
          <Button key="4">Ayuda</Button>
        </a>
      </Link>,
      <Button key="5">Salir</Button>,
    ],
    breadcrumb:{routes:[{path:'/',breadcrumbName:'inicio'}]}
  };

  return (
    <PageContainer>
      <div>
        <PageHeader {...headerProps}></PageHeader>
        <p>Desde aquí puede acceder a los siguientes subsistemas</p>
        <ul>
          <li>
            <Link href="predios-manager">
              <a>Administrador de predios</a>
            </Link>
          </li>
          <li>
            <Link href="personas-manager">
              <a>Administrador de propietarios</a>
            </Link>
          </li>
        </ul>
      </div>
    </PageContainer>
  );
};

export default IndexPage;
