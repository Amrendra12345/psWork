import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect"
import Faq from "@/components/faq/Faq"
import NeedAndSupport from "@/components/needAndSupport/NeedAndSupport"
import ServiceHero from "@/components/serviceHero/ServiceHero"


const Fas = () => {
  return (
    <>
     <ServiceHero
        title="Struggling with Treatment Costs? We&#x27;re Here to Help."
        bgImage="/assets/fas_banner.png"
        subtitle="Cancer and critical care treatment can be expensive but you don&#x27;t have to face it alone. icanheal offers Financial Assistance Services (FAS) to help ease the burden through loans, partner programs, and personalized support based on your medical needs."
      /> 
      <CardUpperEffect/>
      <Faq/>
      <NeedAndSupport/>
    </>
  )
}

export default Fas