import * as React from 'react';

const NavigationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={30} height={30} fill="none" {...props}>
      <path
        d="M23.75 8.75H12.5M23.75 15H12.5m11.25 6.25H12.5M8.75 8.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm0 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm0 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoNavigationIcon = React.memo(NavigationIcon);
export default MemoNavigationIcon;
