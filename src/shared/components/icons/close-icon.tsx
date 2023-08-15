import * as React from 'react';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={12} height={12} fill="none" {...props}>
      <path
        d="M1.625 10.375L6 6m0 0l4.375-4.375M6 6l4.375 4.375M6 6L1.625 1.625"
        stroke="#26376B"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
