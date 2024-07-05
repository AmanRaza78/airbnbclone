"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryChoices } from "@/lib/categoryChoices";
import Image from "next/image";
import { useState } from "react";

export function SelectCategory() {
  const [selectedCategory, setSelectredCategory] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory as string}
      />
      {categoryChoices.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={selectedCategory === item.name ? "border-primary border-2" : ""}
            onClick={() => setSelectredCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="w-8 h-8"
              />

              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}