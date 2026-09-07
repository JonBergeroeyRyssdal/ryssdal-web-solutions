import type { ComponentPropsWithoutRef } from "react";

type ArrowLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

export default function ArrowLink({ children, ...props }: ArrowLinkProps) {
  return (
    <a {...props}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
