import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Directions } from '@/components/sections/Directions'
import { Coaches } from '@/components/sections/Coaches'
import { Gallery } from '@/components/sections/Gallery'
import { Contacts } from '@/components/sections/Contacts'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { TextDivider } from "@/components/ui/TextDivider";
import { Location } from "@/components/sections/Location";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header/>
            <Hero/>
            <Directions/>
            <TextDivider/>
            <Coaches/>
            <TextDivider/>
            <Location/>
            <TextDivider/>
            <Gallery/>
            <TextDivider/>
            <Pricing/>
            <TextDivider/>
            <Reviews/>
            <TextDivider/>
            <FAQ/>
            <Contacts/>
            <Footer/>
            <ScrollToTop/>
        </main>
    )
}
