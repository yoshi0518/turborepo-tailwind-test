import { useState } from 'react';

import { NaBaseRadioGroup } from '@/components/NaBaseRadioGroup';
import type { NaBaseRadioGroupProps, NaBaseRadioItemProps } from '@/components/NaBaseRadioGroup';

const radioItems: NaBaseRadioItemProps[] = [
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3', disabled: true },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

export const UiNaBaseRadioGroup = () => {
  const [value, setValue] = useState('2');

  const props: NaBaseRadioGroupProps = {
    value,
    radioItems,
    label: 'NaRadioGroup',
    onChange: (newValue) => setValue(newValue),
    className: 'mt-2',
  };

  return (
    <section className="mt-4">
      <div className="mt-2">
        <NaBaseRadioGroup {...props} />
        <NaBaseRadioGroup {...props} color="info" />
        <NaBaseRadioGroup {...props} color="success" variant="outline" />
        <NaBaseRadioGroup {...props} color="warning" inline />
        <NaBaseRadioGroup {...props} color="danger" inline disabled />
      </div>
    </section>
  );
};
