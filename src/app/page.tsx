import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Services } from "@/components/sections/Services";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { VintageCollection } from "@/components/sections/VintageCollection";
import { CustomWear } from "@/components/sections/CustomWear";
import { WhySamt } from "@/components/sections/WhySamt";
import { EditorialGallery } from "@/components/sections/EditorialGallery";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStory />
        <Services />
        <FeaturedCollections />
        <VintageCollection />
        <CustomWear />
        <WhySamt />
        <EditorialGallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
