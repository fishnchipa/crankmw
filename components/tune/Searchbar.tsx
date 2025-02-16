"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  query: string;
};

export default function Searchbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      query: searchParams.get("query") || "",
    },
  });

  const submit: SubmitHandler<FormFields> = (data) => {
    const params = new URLSearchParams(searchParams.toString());

    if (data.query) {
      params.set("query", data.query);
    } else {
      params.delete("query");
    }

    router.push(pathname + "?" + params.toString(), {
      scroll: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex h-fit items-center justify-end"
    >
      <input
        className="w-full h-[50px] rounded-md p-3 border border-black"
        placeholder="Search"
        {...register("query")}
      />
      <button type="submit" className="absolute mr-2">
        <Search />
      </button>
    </form>
  );
}
