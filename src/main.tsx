import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './assets/components/Navbar.tsx'
import Hero from './assets/components/Hero.tsx'
import Galery from './assets/components/Galery.tsx'
import Team from './assets/components/Team.tsx'
import Product from './assets/components/Product.tsx'
import Location from './assets/components/Location.tsx'
import Footer from './assets/components/Footer.tsx'
import WhatsappButton from './assets/components/WhatsappButton.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Galery/>
    <Team/>
    <Product/>
    <Location/>
    <Footer/>
    <WhatsappButton/>
  </StrictMode>,
)
