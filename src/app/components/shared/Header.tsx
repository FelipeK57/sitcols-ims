import { Button, User } from "@heroui/react";
import { Inbox } from "lucide-react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { modules } from "./Sidebar";
import { findRouteName } from "@/app/lib/helpers/findRouteName";

export const Header = () => {
  const url = useLocation();
  console.log(modules);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  useEffect(() => {
    const pathnames = url.pathname.split("/").filter((x) => x);
    setBreadcrumbs(pathnames);
  }, [url]);

  console.log(url);

  return (
    <header className="w-full h-16 border-b border-default-200 flex items-center justify-between px-4">
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link to="/">Inicio</Link>
        </BreadcrumbItem>
        {breadcrumbs.map((crumb, index) => {
          const path = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
          const isLast = index === breadcrumbs.length - 1;
          return (
            <BreadcrumbItem key={path} isCurrent={isLast}>
              {isLast ? (
                <span>
                  {findRouteName(crumb) ||
                    crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                </span>
              ) : (
                <Link to={path}>
                  {findRouteName(crumb) ||
                    crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                </Link>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
      <article className="flex items-center gap-4">
        <Button isIconOnly variant="light">
          <Inbox className="size-5 text-default-600" />
        </Button>
        <User
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
          }}
          name="Julian Alvarez"
          description="Administrador"
        />
      </article>
    </header>
  );
};
