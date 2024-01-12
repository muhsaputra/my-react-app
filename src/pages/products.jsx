import CardProducts from "../components/Fragments/CardProducts";

const ProductPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-wrap gap-4">
      <CardProducts>
        <CardProducts.Header image="./public/images/shoes.webp" />
        <CardProducts.Body title="Nike Air Max 90">
          Nothing as fly, nothing as comfortable, nothing as proven. The Air
          Max.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp 2,099,000" />
      </CardProducts>
      <CardProducts>
        <CardProducts.Header image="./public/images/shoes2.webp" />
        <CardProducts.Body title="Nike Air Max Plus">
          The best way to celebrate 25 years of the Air Max Plus? With you, of
          course.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp 3,169,000" />
      </CardProducts>
    </div>
  );
};

export default ProductPage;
