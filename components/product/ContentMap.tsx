import { DescriptionContent } from "@/lib/types/product";

type ContentMapProps = {
  content: DescriptionContent[];
};

export default function ContentMap({ content }: ContentMapProps) {
  return (
    <div className="w-full flex flex-col gap-y-5">
      {content.map((item, key) => {
        if (item.type === "section") {
          return <p key={key}>{item.value}</p>;
        } else if (item.type === "list") {
          return (
            <ul key={key} className="list-disc flex flex-col gap-2 pl-5">
              {item.value.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          );
        }
      })}
    </div>
  );
}
