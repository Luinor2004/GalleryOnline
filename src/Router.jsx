import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import HeroSection from "./festures/Landing/components/HeroSection";
import Invoice from "./festures/Landing/components/InvoiceSection/Invoice";



export const router=createBrowserRouter([
    {path:"/", element:<LandingPage/>, 
    children:[
        {path:"hero", element:<HeroSection/>},
        {path:"invoice", element:<Invoice/>}
    ]}



])