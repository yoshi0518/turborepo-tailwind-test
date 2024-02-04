import { useState } from 'react';

import { NaBaseSelect } from '@/components/NaBaseSelect';
import type { NaBaseSelectProps, NaBaseSelectItemProps } from '@/components/NaBaseSelect';

const selectItems: NaBaseSelectItemProps[] = [
  { label: '-----', value: '0' },
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3', disabled: true },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

export const UiNaBaseSelect = () => {
  const [value, setValue] = useState('0');

  const props: NaBaseSelectProps = {
    value,
    selectItems: selectItems,
    label: 'NaBaseSelect',
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaBaseSelect {...props} />
      </div>
    </section>
  );
};
