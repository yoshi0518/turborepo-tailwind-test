import { useState } from 'react';

import { NaCheckbox } from '@/components/NaCheckbox';
import type { NaCheckboxProps } from '@/components/NaCheckbox';

export const UiNaCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const props: NaCheckboxProps = {
    label: 'label',
    checked,
    onChange: () => setChecked((checked) => !checked),
    className: 'mb-1',
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaCheckbox</h2>
      <div className="mt-2">
        <NaCheckbox {...props} />
        <NaCheckbox {...props} color="info" />
        <NaCheckbox {...props} color="success" variant="outline" />
        <NaCheckbox {...props} color="warning" variant="outline" />
        <NaCheckbox {...props} color="danger" disabled />
      </div>
    </section>
  );
};
