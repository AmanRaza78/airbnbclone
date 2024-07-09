"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCountries } from "@/lib/countryChoices";
import { useState } from "react";
import { SubmitBar } from "./submit-bar";
import dynamic from "next/dynamic";
import { Skeleton } from "./ui/skeleton";

export default function LocationForm({ homeId }: { homeId: string }) {
  const { getAllCountries } = getCountries();
  const [locationValue, setLocationValue] = useState("");


  const LoadingMap = dynamic(() => import("@/components/map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });

  return (
    <form action="">
      <input type="hidden" name="homeId" value={homeId} />
      <input type="hidden" name="countryValue" value={locationValue} />
      <div className="w-3/5 mx-auto mb-36">
        <div className="mb-5">
          <Select required onValueChange={(value) => setLocationValue(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                {getAllCountries().map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.flag} {item.label} / {item.region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <LoadingMap locationValue={locationValue} />
      </div>
      <SubmitBar />
    </form>
  );
}
