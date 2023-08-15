import * as React from 'react';

const DevicePhone = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7.089 12.911c6.03 6.03 7.797 4.587 8.586 4.024.127-.073 3.048-1.955 1.232-3.77-4.213-4.214-3.359 1.262-7.347-2.725-3.988-3.989 1.49-3.134-2.724-7.346-1.816-1.817-3.699 1.104-3.77 1.23-.565.79-2.007 2.558 4.023 8.587z"
        stroke="#000"
        strokeOpacity={0.6}
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoDevicePhone = React.memo(DevicePhone);
export default MemoDevicePhone;
