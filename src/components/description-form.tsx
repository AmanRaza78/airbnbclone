"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { Counter } from "./counter";
import { SubmitBar } from "./submit-bar";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export default function DescriptionForm({ homeId }: { homeId: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <form action="">
      <input type="hidden" name="homeId" value={homeId} />
      <input type="hidden" value={imageUrl ?? undefined} name="imageUrl" />
      <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
        <div className="flex flex-col gap-y-2">
          <Label>Title</Label>
          <Input
            name="title"
            type="text"
            required
            placeholder="Short and simple..."
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Descrption</Label>
          <Textarea
            name="description"
            required
            placeholder="Please describe your home..."
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Price</Label>
          <Input
            name="price"
            type="number"
            required
            placeholder="Price per Night in USD"
            min={10}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Upload Image</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              alert(error);
            }}
            className="ut-button:bg-primary ut-label:text-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-uploading:after:bg-primary cursor-pointer"
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="underline font-medium">Guests</h3>
                <p className="text-muted-foreground text-sm">
                  How many guests do you want?
                </p>
              </div>

              <Counter name="guest" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="underline font-medium">Rooms</h3>
                <p className="text-muted-foreground text-sm">
                  How many rooms do you have?
                </p>
              </div>

              <Counter name="room" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="underline font-medium">Bathrooms</h3>
                <p className="text-muted-foreground text-sm">
                  How many bathrooms do you have?
                </p>
              </div>

              <Counter name="bathroom" />
            </div>
          </CardHeader>
        </Card>
      </div>
      <SubmitBar />
    </form>
  );
}
