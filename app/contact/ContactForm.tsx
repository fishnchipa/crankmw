"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await delay(2000);
    setLoading(false);
  };

  return (
    <form
      className="w-[580px] flex flex-col gap-y-5 pb-32 px-5"
      onSubmit={submit}
    >
      <div className="flex flex-col text-center">
        <p className="text-[16px]">Have a question?</p>
        <h1 className="text-[34px]">CONTACT US</h1>
      </div>
      <div className="flex flex-col text-[16px]">
        <p>
          EMAIL: <span className="font-bold">Admin@crankmw.com.au</span>
        </p>
        <p>
          TEL: <span className="font-bold">+61 02 8044 3000</span>
        </p>
      </div>
      <div className="w-full flex gap-x-5">
        <Input label={"Name"} />
        <Input label={"Email"} />
      </div>
      <Input label={"Phone Number"} />
      <TextArea label={"Inquiry"} />
      <Button label="SEND INQUIRY" type="submit" loading={loading} />
    </form>
  );
}
