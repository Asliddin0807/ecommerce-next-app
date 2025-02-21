import DialogComponent from "@/components/Dialog/Dialog";
import { IProducts } from "@/Interface/Produc_iterfaces";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const fetchSingleData = await fetch(
    `https://fakestoreapi.in/api/products/${id}`
  );
  const product: { product: IProducts } = await fetchSingleData.json();

  return (
    <div>
      <DialogComponent product={product.product} />
    </div>
  );
}
