import PageContainer from 'components/common/page-container';
import CommonHeader from 'components/common/common-header';
import ClientOnly from 'components/common/ClientOnly';
import PredioEditorComponent from 'components/predios/predio-edit'

const PersonasManagerPage= ()=>{
  return (
    <PageContainer>
      <ClientOnly>
        <CommonHeader/>
          <PredioEditorComponent />
      </ClientOnly>
    </PageContainer>
  )
}

export default PersonasManagerPage