import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaSearchModal } from '@/components/NaSearchModal';
import type { NaSearchModalProps } from '@/components/NaSearchModal';

export const UiNaSearchModal = () => {
  const [visible, setVisible] = useState(false);

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: () => setVisible(true),
  };

  const propsModal: NaSearchModalProps = {
    visible,
    onClickSearch: () => setVisible(false),
    onClickClear: () => setVisible(false),
    onClickClose: () => setVisible(false),
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaSearchModal</h2>
      <div className="mt-2">
        <NaBaseButton {...propsButton}>Open</NaBaseButton>
      </div>

      <NaSearchModal {...propsModal}>
        <>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
          <p className="m-0">text text text text text</p>
        </>
      </NaSearchModal>
    </section>
  );
};
