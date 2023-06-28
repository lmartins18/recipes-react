import { IconType } from "react-icons";

export const HrWithIcon = ({ Icon }: { Icon: IconType }) => (
  <div className="flex items-center justify-center w-full py-6">
    <hr className="w-1/2 border-0 border-t-2 border-gray-300" />
    <div className="px-4">
      <Icon />
    </div>
    <hr className="w-1/2 border-0 border-t-2 border-gray-300" />
  </div>
);
