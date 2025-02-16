import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

export default function TuneForm() {
  return (
    <form className="w-[580px] flex flex-col gap-y-5 pb-40 px-5">
      <h1 className="text-[34px] font-bold text-center">REQUEST A QUOTE</h1>
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
      <Button label="SEND INQUIRY" type="submit" />
    </form>
  );
}
