import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
}

const DescStats = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center gap-2 text-base text-slate-700 font-[iranyekan300] leading-7">
      {icon} <span>{title}</span>
    </div>
  );
};

export default DescStats;
