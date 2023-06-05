import { FeaturedSection } from "@/components/FeaturedSection";
import { Section, Text } from "@/components/Text";
import {
  Product,
  Collection,
} from "@/lib/shopify/types";

interface INoSearchResults {
  featuredProducts: Product[];
  featuredCollections: Collection[];
}
const NoSearchResults = ({
  featuredProducts,
  featuredCollections,
}: INoSearchResults) => {

  return (
    <>
      <Section padding="x">
        <Text className="opacity-50">No results, try a different search.</Text>
      </Section>

      <FeaturedSection
        featuredCollections={featuredCollections}
        featuredProducts={featuredProducts}
      />
    </>
  );
};

export default NoSearchResults;
