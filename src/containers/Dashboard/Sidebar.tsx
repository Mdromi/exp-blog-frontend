import React, { ReactNode } from 'react';

interface SidebarProps {
  title: string;
  items: {
    icon?: ReactNode;
    label: string;
    count?: ReactNode;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, items }) => {
  return (
    <div className="">
      <div className="fixed flex shadow top-20 flex-col left-0 w-64 bg-base-100 h-full border-r border-base-300">
        <div className="flex items-center text-base-content justify-center h-14 border-b border-base-300">
          <div>{title}</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {!item.icon ? (
                  // Render the default menu heading item
                  <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm font-light tracking-wide text-neutral-content">
                        {item.label}
                      </div>
                    </div>
                  </li>
                ) : (
                  // Render the regular list item with icon, label, and count
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-base-200 text-base-content  border-l-4 border-transparent hover:border-primary pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        {item.icon}
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        {item.label}
                      </span>
                      {item.count && (
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-primary bg-base-200 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
