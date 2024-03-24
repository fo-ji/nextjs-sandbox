'use client';

import { useForm, getFormProps } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { ConformCheckbox } from '@/components/ui/conform-checkbox';
import { ConformInput } from '@/components/ui/conform-input';
import { Field, FieldError } from '@/components/ui/field';
import { Label } from '@/components/ui/label';

import { login } from '../../actions/login';
import { loginSchema } from '../../schemas/login';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" form="login" disabled={pending}>
      Login
    </Button>
  );
};

export const LoginForm = () => {
  const [lastResult, action] = useFormState(login, undefined);
  const [form, fields] = useForm({
    id: 'login',
    lastResult,
    defaultValue: {
      email: 'user1@example.com',
      password: 'Password12345!',
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: 'onInput',
  });

  return (
    <form
      {...getFormProps(form)}
      action={action}
      className="mx-auto grid max-w-sm gap-4"
    >
      <Field>
        <Label htmlFor={fields.email.id}>Email</Label>
        <ConformInput meta={fields.email} type="text" />
        <FieldError>{fields.email.errors}</FieldError>
      </Field>
      <Field>
        <Label htmlFor={fields.password.id}>Password</Label>
        <ConformInput meta={fields.password} type="password" />
        <FieldError>{fields.password.errors}</FieldError>
      </Field>
      <Field>
        <div className="flex items-center gap-2">
          <ConformCheckbox meta={fields.remember} />
          <Label htmlFor={fields.remember.id}>Remember me</Label>
        </div>
      </Field>
      <SubmitButton />
      <Button variant="outline" {...form.reset.getButtonProps()}>
        Reset
      </Button>
    </form>
  );
};
