import { useState } from 'react';

import { Button } from 'shared/Button';

type UserFormProps = {
  title: string;
  onClick: (email: string, name: string) => void;
  currentName?: string;
  currentEmail?: string;
};

export const UserForm = ({
  title,
  onClick,
  currentEmail,
  currentName,
}: UserFormProps) => {
  const [name, setName] = useState<string>(currentName ?? '');
  const [email, setEmail] = useState<string>(currentEmail ?? '');

  return (
    <div className="w-full bg-white rounded shadow border flex flex-col gap-2 justify-center items-center p-4 mt-3">
      <input
        type="text"
        value={name}
        className="px-4 py-1 rounded border w-full"
        placeholder="name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        className="px-4 py-1 rounded border w-full"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        title={title}
        onClick={() => onClick(email, name)}
        classname="mt-2"
      />
    </div>
  );
};
