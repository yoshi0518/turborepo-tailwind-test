import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaDialog } from '@/components/NaDialog';
import type { NaDialogProps } from '@/components/NaDialog';

export const UiNaDialog = () => {
  const [visible, setVisible] = useState(false);

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: () => setVisible(true),
  };

  const propsDialog: NaDialogProps = {
    title: 'Title',
    message: ['message1 message1 message1', 'message2 message2 message2', 'message3 message3 message3'],
    visible,
    color: 'question',
    okLabel: 'OK',
    cancelLabel: 'CANCEL',
    onClickOk: () => setVisible(false),
    onClickCancel: () => setVisible(false),
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaDialog</h2>
      <div className="mt-2">
        <NaBaseButton {...propsButton}>Open</NaBaseButton>
      </div>

      <NaDialog {...propsDialog} />
    </section>
  );
};
