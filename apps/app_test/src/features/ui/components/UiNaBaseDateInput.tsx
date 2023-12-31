import { useState } from 'react';

import { NaBaseDateInput } from '@/components/NaBaseDateInput';
import type { NaBaseDateInputProps } from '@/components/NaBaseDateInput';

export const UiNaBaseDateInput = () => {
  const [value, setValue] = useState<Date>();

  const props: NaBaseDateInputProps = {
    value,
    label: 'NaBaseDateInput',
    withAsterisk: true,
    minDate: new Date(),
    onChange: (newValue) => setValue(newValue),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaBaseDateInput {...props} />
      </div>
    </section>
  );
};
