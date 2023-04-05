import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

interface Props {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
}

export default function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center cursor-pointer transition-all duration-200 space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
}
