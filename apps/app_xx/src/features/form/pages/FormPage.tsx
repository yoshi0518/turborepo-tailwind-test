import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import * as z from 'zod';

import { NaBaseButton } from '@/components/NaBaseButton';
import { NaBaseInput } from '@/components/NaBaseInput';
import { NaBaseSelect } from '@/components/NaBaseSelect';
import type { NaBaseSelectItemProps } from '@/components/NaBaseSelect';
import { NaCheckbox } from '@/components/NaCheckbox';
import { NaPasswordInput } from '@/components/NaPasswordInput';
import { NaRhfCheckboxGroup } from '@/components/NaRhfCheckboxGroup';
import type { NaRhfCheckboxItemProps } from '@/components/NaRhfCheckboxGroup';
import { NaRhfDateInput } from '@/components/NaRhfDateInput';
import { NaRhfMonthInput } from '@/components/NaRhfMonthInput';
import { NaRhfRadioGroup } from '@/components/NaRhfRadioGroup';
import type { NaRhfRadioItemProps } from '@/components/NaRhfRadioGroup';
import { NaSwitch } from '@/components/NaSwitch';
import { NaTextarea } from '@/components/NaTextarea';

import { appTitle } from '@/config';

import { FormArray } from './FormArray';

const LoginSchema = z
  .object({
    email: z.string().email().min(1),
    biko: z.string().min(1),
    password: z.string().min(1),
    count: z.number(),
    date: z.date().nullable(),
    month: z.date().nullable(),
    select: z.string().refine((value) => Number(value) >= 1, { message: '選択してください' }),
    switch: z.boolean().refine((value) => value, { message: 'Onにしてください' }),
    check: z.boolean().refine((value) => value, { message: 'チェックしてください' }),
    checkItems: z.array(z.string()).min(1),
    radioItem: z.string(),
    items: z.array(
      z.object({
        name: z.string().min(1),
        unitPrice: z.number().min(1),
        quantity: z.number().min(1),
      }),
    ),
  })
  .transform((_data) => {
    const date = dayjs(_data.date).format('YYYY-MM-DD');
    const select = Number(_data.select);
    const radioItem = Number(_data.radioItem);

    console.log('=== Transform前 ===');
    console.log(_data);

    return {
      ..._data,
      date,
      select,
      radioItem,
    };
  });

export type LoginType = z.input<typeof LoginSchema>; // inputの場合 => transform前で型推論
// type LoginType = z.infer<typeof LoginSchema>; // inferの場合 => transform後で型推論

const selectItems: NaBaseSelectItemProps[] = [
  { label: '---', value: '0' },
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3' },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

const checkboxItems: NaRhfCheckboxItemProps[] = [
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3', disabled: true },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

const radioItems: NaRhfRadioItemProps[] = [
  { label: 'Item-1', value: '1' },
  { label: 'Item-2', value: '2' },
  { label: 'Item-3', value: '3', disabled: true },
  { label: 'Item-4', value: '4' },
  { label: 'Item-5', value: '5' },
];

export const FormPage = () => {
  const title = `Form | ${appTitle}`;
  const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   setError,
  //   control,
  //   formState: { errors, isDirty, isValid, isSubmitting },
  // } = useForm<LoginType>({
  //   resolver: zodResolver(LoginSchema),
  //   mode: 'onChange',
  //   defaultValues: async () => {
  //     return {
  //       email: '',
  //       biko: '',
  //       password: '',
  //       count: 0,
  //       date: null,
  //       month: null,
  //       select: '0',
  //       switch: false,
  //       check: false,
  //       checkItems: ['2'],
  //       radioItem: '2',
  //       items: [{ name: '', unitPrice: 0, quantity: 0 }],
  //     };
  //   },
  // });
  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    defaultValues: async () => {
      return {
        email: '',
        biko: '',
        password: '',
        count: 0,
        date: null,
        month: null,
        select: '0',
        switch: false,
        check: false,
        checkItems: ['2'],
        radioItem: '2',
        items: [{ name: '', unitPrice: 0, quantity: 0 }],
      };
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log('=== Transform後 ===');
    console.log(data);

    // ★★★ API実行 ★★★

    // API実行エラー
    setError('root', {
      type: 'validate',
      message: 'ユーザーID、パスワードに誤りがあります',
    });
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">FormPage</h1>
      <main className="w-1/2 p-2">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <NaBaseInput {...register('email')} label="Email" error={errors.email?.message} />
            <NaTextarea {...register('biko')} label="備考" error={errors.biko?.message} />
            <NaPasswordInput {...register('password')} label="Password" error={errors.password?.message} />
            <NaBaseInput
              {...register('count', { valueAsNumber: true })}
              label="Count"
              type="number"
              appendWord="階"
              error={errors.count?.message}
            />
            <NaRhfDateInput {...register('date')} label="日付" error={errors.date?.message} />
            <NaRhfMonthInput {...register('month')} label="年月" error={errors.month?.message} />
            <NaBaseSelect
              {...register('select')}
              selectItems={selectItems}
              label="選択肢"
              error={errors.select?.message}
            />
            <NaSwitch
              {...register('switch')}
              label="スイッチ"
              color="info"
              error={errors.switch?.message}
              className="mt-4"
            />
            <NaCheckbox
              {...register('check')}
              label="チェック"
              color="success"
              error={errors.check?.message}
              className="mt-4"
            />
            <NaRhfCheckboxGroup
              {...register('checkItems')}
              checkboxItems={checkboxItems}
              color="danger"
              variant="outline"
              label="チェックボックス"
              error={errors.checkItems?.message}
            />
            <NaRhfRadioGroup
              {...register('radioItem')}
              radioItems={radioItems}
              color="success"
              variant="outline"
              label="ラジオボタン"
              error={errors.radioItem?.message}
            />

            <FormArray />

            {errors.root && <div className="mt-4 text-rose-500">{errors.root?.message}</div>}

            <div className="mt-4">
              <NaBaseButton
                type="submit"
                color="info"
                disabled={!isDirty || !isValid}
                loading={isSubmitting}
                className="mr-2"
              >
                Submit
              </NaBaseButton>
              <NaBaseButton color="default" onClick={() => reset()} className="mr-2">
                Reset
              </NaBaseButton>
              <NaBaseButton color="danger" onClick={() => console.log({ errors })}>
                Errors
              </NaBaseButton>
            </div>
          </form>
          <DevTool control={control} />
        </FormProvider>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push('/')}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};
