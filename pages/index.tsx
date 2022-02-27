import PageContainer from "components/common/page-container";
import CommonHeader from "components/common/common-header";
import Link from "next/link";
import "antd/dist/antd.css";

const IndexPage = () => {
  return (
    <PageContainer>
      <div>
        <CommonHeader/>
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
