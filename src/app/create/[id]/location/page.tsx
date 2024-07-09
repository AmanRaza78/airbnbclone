import LocationForm from "@/components/location-form";

export default function LocationPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Where is your Home located?
        </h2>
      </div>
      <LocationForm homeId={params.id}/>
    </>
  );
}