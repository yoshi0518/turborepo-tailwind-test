import { useState } from 'react';

import { NaBaseCheckboxGroup } from '@/components/NaBaseCheckboxGroup';
import type { NaBaseCheckboxGroupProps, NaBaseCheckboxItemProps } from '@/components/NaBaseCheckboxGroup';

const checkboxItems: NaBaseCheckboxItemProps[] = [
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3', disabled: true },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

export const UiNaBaseCheckboxGroup = () => {
  const [value, setValue] = useState(['2']);

  const props: NaBaseCheckboxGroupProps = {
    value,
    checkboxItems,
    label: 'NaCheckboxGroup',
    onChange: (newValue) => setValue(newValue),
    className: 'mt-2',
  };

  return (
    <section className="mt-4">
      <div className="mt-2">
        <NaBaseCheckboxGroup {...props} />
        <NaBaseCheckboxGroup {...props} color="info" />
        <NaBaseCheckboxGroup {...props} color="success" variant="outline" />
        <NaBaseCheckboxGroup {...props} color="warning" inline />
        <NaBaseCheckboxGroup {...props} color="danger" inline disabled />
      </div>
    </section>
  );
};
