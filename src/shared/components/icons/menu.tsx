import * as React from 'react';

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  light?: boolean;
}

const MenuIcon = (props: MenuIconProps) => {
  const {
    light = true,
    ...others
  } = props;
  return (
    <svg width={20} height={16} fill="none" {...others}>
      <path
        d="M18.75 1.75H1.25M18.75 8H10m8.75 6.25H5"
        stroke={light ? '#fff' : '#26376B'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoMenu = React.memo(MenuIcon);
export default MemoMenu;
