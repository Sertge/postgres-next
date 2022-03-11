import PageContainer from 'components/common/page-container';
import CommonHeader from 'components/common/common-header';
import ClientOnly from 'components/common/ClientOnly';
import PersonasManagerComponent from 'components/personas/personas-manager';

const PersonasManagerPage= ()=>{
  return (
    <PageContainer>
      <ClientOnly>
        <CommonHeader/>
          <PersonasManagerComponent />
      </ClientOnly>
    </PageContainer>
  )
}

export default PersonasManagerPage