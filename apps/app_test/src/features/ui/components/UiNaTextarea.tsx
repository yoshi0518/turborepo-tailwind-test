import { useState } from 'react';

import { NaTextarea } from '@/components/NaTextarea';
import type { NaTextareaProps } from '@/components/NaTextarea';

export const UiNaTextarea = () => {
  const [value, setValue] = useState('');

  const props: NaTextareaProps = {
    value,
    label: 'NaTextarea',
    withAsterisk: true,
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <section className="mt-4">
      <div className="mt-2 w-1/2">
        <NaTextarea {...props} />
      </div>
    </section>
  );
};
