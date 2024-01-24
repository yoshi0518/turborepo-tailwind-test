import clsx from 'clsx';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { NaBaseButton } from '@/components/NaBaseButton';
import { NaBaseInput } from '@/components/NaBaseInput';
import { NaFieldset } from '@/components/NaFieldset';

import type { LoginType } from './FormPage';

export const FormArray = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<LoginType>();
  const {
    fields: items,
    append,
    remove,
  } = useFieldArray({
    name: 'items',
    control,
  });

  return (
    <NaFieldset legend="Items">
      <div>
        <NaBaseButton
          color="success"
          onClick={() =>
            append({
              name: '',
              unitPrice: 0,
              quantity: 0,
            })
          }
        >
          Append
        </NaBaseButton>
      </div>
      {items.map((item, index) => (
        <div key={item.id} className="flex">
          <NaBaseInput
            {...register(`items.${index}.name`)}
            label={index === 0 ? 'Name' : ''}
            className={clsx('mr-2', { 'mt-2': index > 0 })}
          />
          <NaBaseInput
            {...register(`items.${index}.unitPrice`, { valueAsNumber: true })}
            type="number"
            label={index === 0 ? 'UnitPrice' : ''}
            className={clsx('mr-2', { 'mt-2': index > 0 })}
          />
          <NaBaseInput
            {...register(`items.${index}.quantity`, { valueAsNumber: true })}
            type="number"
            label={index === 0 ? 'Quantity' : ''}
            className={clsx('mr-2', { 'mt-2': index > 0 })}
          />
          <NaBaseButton onClick={() => remove(index)} className={index > 0 ? 'mt-2' : ''}>
            Delete
          </NaBaseButton>
        </div>
      ))}
      {errors.items &&
        errors.items?.map((item, index) => (
          <div key={index}>
            {item.name && (
              <div>
                {`${index + 1}行目: `}
                {item.name.message}
              </div>
            )}
            {item.unitPrice && (
              <div>
                {`${index + 1}行目: `}
                {item.unitPrice.message}
              </div>
            )}
            {item.quantity && (
              <div>
                {`${index + 1}行目: `}
                {item.quantity.message}
              </div>
            )}
          </div>
        ))}
    </NaFieldset>
  );
};
