import * as React from 'react';

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M3.064 4.583L7.788 9.49m0 0l-4.724 5.927M7.788 9.49l1.075 1.115c.64.598 1.634.598 2.274 0l1.13-1.115m4.816-4.759L12.267 9.49m0 0l4.816 5.78m-14.019.147c.294.26.68.416 1.103.416h11.666c.498 0 .945-.218 1.25-.564m-14.019.148a1.663 1.663 0 01-.564-1.25V5.833c0-.92.746-1.666 1.667-1.666h11.666c.92 0 1.667.746 1.667 1.666v8.334c0 .422-.157.808-.417 1.102"
        stroke="#000"
        strokeOpacity={0.6}
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoMailIcon = React.memo(MailIcon);
export default MemoMailIcon;
