import { useState } from 'react';

import { NaBaseInput } from '@/components/NaBaseInput';
import type { NaBaseInputProps } from '@/components/NaBaseInput';

export const UiNaBaseInput = () => {
  const [value, setValue] = useState('');

  const props: NaBaseInputProps = {
    value,
    label: 'NaBaseInput',
    withAsterisk: true,
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaBaseInput {...props} />
      </div>
    </section>
  );
};
