import { useState } from 'react';

import { NaPasswordInput } from '@/components/NaPasswordInput';
import type { NaPasswordInputProps } from '@/components/NaPasswordInput';

export const UiNaPasswordInput = () => {
  const [value, setValue] = useState('');

  const props: NaPasswordInputProps = {
    value,
    label: 'NaPasswordInput',
    withAsterisk: true,
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaPasswordInput {...props} />
      </div>
    </section>
  );
};
