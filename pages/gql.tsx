import PageContainer from 'components/common/page-container'
import getiQl from 'components/graphiql';
import { useEffect } from 'react';

const gqlPage = ()=>{
  useEffect(()=>{
    getiQl()
  },[])

  return (
    <PageContainer>
      <div></div>
    </PageContainer>
  )
}

export default gqlPage