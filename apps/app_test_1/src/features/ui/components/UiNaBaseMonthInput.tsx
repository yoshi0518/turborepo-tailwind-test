import { useState } from 'react';

import { NaBaseMonthInput } from '@/components/NaBaseMonthInput';
import type { NaBaseMonthInputProps } from '@/components/NaBaseMonthInput';

export const UiNaBaseMonthInput = () => {
  const [value, setValue] = useState<Date>();

  const props: NaBaseMonthInputProps = {
    value,
    label: 'NaBaseMonthInput',
    withAsterisk: true,
    minDate: new Date(),
    onChange: (newValue) => setValue(newValue),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaBaseMonthInput {...props} />
      </div>
    </section>
  );
};
