import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';

import { onClick } from '@/features/ui/functions/onClick';

export const UiNaBaseButton = () => {
  const props: NaBaseButtonProps = {
    onClick,
    className: 'mr-2',
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaBaseButton</h2>
      <div className="mt-2">
        <NaBaseButton {...props}>Default</NaBaseButton>
        <NaBaseButton {...props} color="info">
          Info
        </NaBaseButton>
        <NaBaseButton {...props} color="success" variant="outline">
          Success
        </NaBaseButton>
        <NaBaseButton {...props} color="warning" variant="outline">
          Warning
        </NaBaseButton>
        <NaBaseButton {...props} color="danger" disabled>
          Danger
        </NaBaseButton>
      </div>
    </section>
  );
};
