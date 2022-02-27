import PageContainer from "components/common/page-container";
import CommonHeader from "components/common/common-header";
import ClientOnly from "components/common/ClientOnly";
import PersonaEditorComponent from "components/personas/persona-edit";


const PersonasEditorPage= ()=>{
  return (
    <PageContainer>
      <ClientOnly>
        <CommonHeader/>
          <PersonaEditorComponent />
      </ClientOnly>
    </PageContainer>
  )
}

export default PersonasEditorPage