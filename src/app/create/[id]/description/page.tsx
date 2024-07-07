import DescriptionForm from "@/components/description-form";


export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Describe your home as good as you want!
        </h2>
      </div>
      <DescriptionForm homeId={params.id}/> 
    </>
  );
}