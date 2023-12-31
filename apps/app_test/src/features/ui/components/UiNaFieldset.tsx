import { useState } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import type { NaBaseButtonProps } from '@/components/NaBaseButton';
import { NaBaseInput } from '@/components/NaBaseInput';
import type { NaBaseInputProps } from '@/components/NaBaseInput';
import { NaFieldset } from '@/components/NaFieldset';
import type { NaFieldsetProps } from '@/components/NaFieldset';
import { NaPasswordInput } from '@/components/NaPasswordInput';
import type { NaPasswordInputProps } from '@/components/NaPasswordInput';

export const UiNaFieldset = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const propsUserId: NaBaseInputProps = {
    value: userId,
    name: 'userId',
    label: 'UserId',
    onChange: (e) => setUserId(e.target.value),
  };

  const propsPassword: NaPasswordInputProps = {
    value: password,
    name: 'password',
    label: 'Password',
    onChange: (e) => setPassword(e.target.value),
    className: 'mt-2',
  };

  const propsButton: NaBaseButtonProps = {
    color: 'info',
    onClick: () => console.log({ userId, password }),
    className: 'mt-2',
  };

  const propsFieldset: NaFieldsetProps = {
    legend: 'ログイン',
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaFieldset</h2>
      <div className="mt-2 w-1/2">
        <NaFieldset {...propsFieldset}>
          <NaBaseInput {...propsUserId} />
          <NaPasswordInput {...propsPassword} />
          <NaBaseButton {...propsButton}>Login</NaBaseButton>
        </NaFieldset>
      </div>
    </section>
  );
};
