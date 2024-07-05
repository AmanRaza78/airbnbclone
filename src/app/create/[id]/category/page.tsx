import { SelectCategory } from "@/components/select-category";
import { SubmitBar } from "@/components/submit-bar";

export default function StrucutreRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Select category that describe your Home?
        </h2>
      </div>
      <SelectCategory/>
      <SubmitBar/>
    </>
  );
}