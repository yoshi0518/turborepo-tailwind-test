import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { UiNaBaseButton } from '@/features/ui/components/UiNaBaseButton';
import { UiNaBaseCheckboxGroup } from '@/features/ui/components/UiNaBaseCheckboxGroup';
import { UiNaBaseDateInput } from '@/features/ui/components/UiNaBaseDateInput';
import { UiNaBaseInput } from '@/features/ui/components/UiNaBaseInput';
import { UiNaBaseModal } from '@/features/ui/components/UiNaBaseModal';
import { UiNaBaseMonthInput } from '@/features/ui/components/UiNaBaseMonthInput';
import { UiNaBaseRadioGroup } from '@/features/ui/components/UiNaBaseRadioGroup';
import { UiNaBaseSelect } from '@/features/ui/components/UiNaBaseSelect';
import { UiNaCheckbox } from '@/features/ui/components/UiNaCheckbox';
import { UiNaDialog } from '@/features/ui/components/UiNaDialog';
import { UiNaFieldset } from '@/features/ui/components/UiNaFieldset';
import { UiNaHelpModal } from '@/features/ui/components/UiNaHelpModal';
import { UiNaLoading } from '@/features/ui/components/UiNaLoading';
import { UiNaNotifications } from '@/features/ui/components/UiNaNotifications';
import { UiNaPagination } from '@/features/ui/components/UiNaPagination';
import { UiNaPasswordInput } from '@/features/ui/components/UiNaPasswordInput';
import { UiNaSearchModal } from '@/features/ui/components/UiNaSearchModal';
import { UiNaSwitch } from '@/features/ui/components/UiNaSwitch';
import { UiNaTextarea } from '@/features/ui/components/UiNaTextarea';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const UiPage = () => {
  const title = `Ui | ${appTitle}`;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">UiPage</h1>
      <main>
        <UiNaBaseButton />
        <UiNaBaseCheckboxGroup />
        <UiNaBaseDateInput />
        <UiNaBaseInput />
        <UiNaBaseModal />
        <UiNaBaseMonthInput />
        <UiNaBaseRadioGroup />
        <UiNaBaseSelect />
        <UiNaCheckbox />
        <UiNaDialog />
        <UiNaFieldset />
        <UiNaHelpModal />
        <UiNaNotifications />
        <UiNaPagination />
        <UiNaPasswordInput />
        <UiNaSearchModal />
        <UiNaSwitch />
        <UiNaTextarea />
        <UiNaLoading />
      </main>

      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url())}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};
