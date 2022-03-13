import PageContainer from 'components/common/page-container';
import CommonHeader from 'components/common/common-header';
import PrediosManagerComponent from 'components/predios/predios-manager';

const PrediosManagerPage = ()=>{
  return (
    <PageContainer>
        <CommonHeader/>
        <PrediosManagerComponent/>
    </PageContainer>
  )
}

export default PrediosManagerPage