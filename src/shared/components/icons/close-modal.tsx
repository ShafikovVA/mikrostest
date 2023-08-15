import * as React from 'react';

const CloseModal = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        d="M7.5 14.5L11 11m0 0l3.5-3.5M11 11l3.5 3.5M11 11L7.5 7.5m13 3.5a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
        stroke="#fff"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoCloseModal = React.memo(CloseModal);
export default MemoCloseModal;
