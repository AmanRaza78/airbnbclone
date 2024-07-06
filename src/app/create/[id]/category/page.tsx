import { createCategory } from "@/app/action";
import { SelectCategory } from "@/components/select-category";
import { SubmitBar } from "@/components/submit-bar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function StrucutreRoute({ params }: { params: { id: string } }) {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  if(!user){
    return redirect("/api/auth/login")
  } 
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Select category that describe your Home?
        </h2>
      </div>
      <form action={createCategory}>
        <input type="hidden" name="homeId" value={params.id}/>
        <SelectCategory />
        <SubmitBar />
      </form>
    </>
  );
}
