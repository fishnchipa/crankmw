import Brand from "@/components/Brand";
import Headline from "@/components/headline/Headline";
import MediaSection from "@/components/media/MediaSection";
import ProductLanding from "@/components/product/ProductLanding";
import ReviewSection from "@/components/review/ReviewSection";
import TuneBackDrop from "@/components/tune/TuneBackDrop";
import TuneSection from "@/components/tune/TuneSection";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col">
        <Video />
        <Brand />
        <Headline />
        <ProductLanding title="HOT PRODUCTS" />
        <ProductLanding title="DOWNPIPES" />
        <ProductLanding title="AIR INTAKES" />
        <div className="flex justify-center items-center w-full mt-[200px] relative">
          <TuneBackDrop />
          <TuneSection />
        </div>
        <ReviewSection />
        <MediaSection />
      </div>
    </div>
  );
}
