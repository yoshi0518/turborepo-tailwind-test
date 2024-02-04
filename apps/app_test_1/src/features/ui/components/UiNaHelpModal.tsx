import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaHelpModal } from '@/components/NaHelpModal';
import type { NaHelpModalProps } from '@/components/NaHelpModal';

export const UiNaHelpModal = () => {
  const [visible, setVisible] = useState(false);

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: () => setVisible(true),
  };

  const propsModal: NaHelpModalProps = {
    title: 'Title',
    visible,
    onClickClose: () => setVisible(false),
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaHelpModal</h2>
      <div className="mt-2">
        <NaBaseButton {...propsButton}>Open</NaBaseButton>
      </div>

      <NaHelpModal {...propsModal}>
        <>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
        </>
      </NaHelpModal>
    </section>
  );
};
