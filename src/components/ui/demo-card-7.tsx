import { InteractiveProductCard } from "@/components/ui/card-7";
import { PRODUCTS } from "@/data/products";

export default function InteractiveProductCardDemo() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-black p-4">
      <InteractiveProductCard
        product={PRODUCTS[0]}
        onSelectProduct={() => {}}
      />
    </div>
  );
}
