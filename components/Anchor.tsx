import Link from "next/link";

type AnchorProps = {
  href: string;
  className?: string;
} & React.PropsWithChildren;

export default function Anchor({ href, className, children }: AnchorProps) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
