import { useState } from 'react';

import { NaPagination } from '@/components/NaPagination';
import type { NaPaginationProps } from '@/components/NaPagination';

export const UiNaPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const props: NaPaginationProps = {
    currentPage,
    maxPage: 20,
    displayCount: 2,
    loading: false,
    onClickMove: async (page) => setCurrentPage(page),
    onClickNext: () => {
      if (currentPage === props.maxPage) return;
      setCurrentPage((currentPage) => currentPage + 1);
    },
    onClickPrev: () => {
      if (currentPage === 1) return;
      setCurrentPage((currentPage) => currentPage - 1);
    },
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaPagination</h2>
      <div className="mt-2">
        <NaPagination {...props} />
      </div>
    </section>
  );
};
