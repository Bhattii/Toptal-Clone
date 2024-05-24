import { ClientsHeading } from "../components/ClientsHeading"
import { FeaturedEnterpriseClients } from "../components/FeaturedEnterpriseClients"
import { FeaturedStartupClients } from "../components/FeaturedStartupClients"
import { Header } from "../layouts/Header"


export const Clients = () => {
  return (
   <>

   <Header/>
   <ClientsHeading/>
   <FeaturedEnterpriseClients/>
   <FeaturedStartupClients/>
   </>
  )
}
