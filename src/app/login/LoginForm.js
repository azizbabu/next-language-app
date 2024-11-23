'use client';

import { useFormState } from 'react-dom';
import LoginFormErrors from './LoginFormErrors';

export default function LoginForm({
  action,
  fields,
  header,
  submit
}) {
  const [state, formAction] = useFormState(action, null);

  return (
    <form
      action={formAction}
      className="mx-auto my-20 w-full max-w-[24rem] px-4"
    >
      {header}
      <div className="mb-10 mt-14">
        {fields}
        {state?.success === false && (
          <div className="mt-4">
            <LoginFormErrors errors={state.errors} />
          </div>
        )}
      </div>
      {submit}
    </form>
  );
}
