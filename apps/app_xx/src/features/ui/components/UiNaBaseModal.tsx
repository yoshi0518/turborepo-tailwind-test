import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaBaseModal } from '@/components/NaBaseModal';
import type { NaBaseModalProps } from '@/components/NaBaseModal';

export const UiNaBaseModal = () => {
  const [visible, setVisible] = useState(false);

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: () => setVisible(true),
  };

  const propsModal: NaBaseModalProps = {
    title: 'Title',
    visible,
    okLabel: 'OK',
    cancelLabel: 'CANCEL',
    onClickOk: () => setVisible(false),
    onClickCancel: () => setVisible(false),
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaBaseModal</h2>
      <div className="mt-2">
        <NaBaseButton {...propsButton}>Open</NaBaseButton>
      </div>

      <NaBaseModal {...propsModal}>
        <>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
        </>
      </NaBaseModal>
    </section>
  );
};
