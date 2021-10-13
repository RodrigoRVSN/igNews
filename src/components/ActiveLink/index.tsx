import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter();
  const { asPath } = useRouter();

  const className =
    asPath.replace(`/${String(router.query.slug)}`, "") === rest.href
      ? activeClassName
      : "";

  return (
    <>
      <Link {...rest}>{cloneElement(children, { className })}</Link>
    </>
  );
}
