import { useState } from 'react';

import { NaSwitch } from '@/components/NaSwitch';
import type { NaSwitchProps } from '@/components/NaSwitch';

export const UiNaSwitch = () => {
  const [checked, setChecked] = useState(false);

  const props: NaSwitchProps = {
    label: 'label',
    checked,
    onChange: () => setChecked((checked) => !checked),
    className: 'mb-1',
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaSwitch</h2>
      <div className="mt-2">
        <NaSwitch {...props} />
        <NaSwitch {...props} color="info" />
        <NaSwitch {...props} color="success" />
        <NaSwitch {...props} color="warning" />
        <NaSwitch {...props} color="danger" disabled />
      </div>
    </section>
  );
};
