import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaLoading } from '@/components/NaLoading';
import type { NaLoadingProps } from '@/components/NaLoading';

export const UiNaLoading = () => {
  const [visible, setVisible] = useState(false);

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: async () => {
      setVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setVisible(false);
    },
  };

  const propsLoading: NaLoadingProps = {
    visible,
    full: true,
    type: 'spinner',
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaLoading</h2>
      <div className="mt-2">
        <NaBaseButton {...propsButton}>Open</NaBaseButton>
      </div>

      <NaLoading {...propsLoading} />
    </section>
  );
};
