'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './ContactForm.module.css';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import clsx from "clsx";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFields, FormSchema } from "./FormSchema";
import sendEmail from "@/actions/SendEmail";

const INITIAL_MESSAGE = {
  type: null,
  message: null,
};

const ContactForm = () => {
  const { register, handleSubmit, formState, clearErrors, reset } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    }
  });

  const [toast, setToast] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>(INITIAL_MESSAGE);
  const { errors, isValid } = formState;

  const onSubmit = async (data: FormFields) => {
    
    if (isValid) {
      const { status } = await sendEmail(data);

      if (status === 'success') {
        setToast({
          type: 'success',
          message: 'Thank you for your message. 🙂',
        });
        clearErrors();
        reset();
        setTimeout(() => setToast(INITIAL_MESSAGE), 3000);
      }
      if (status === 'error') {
        setToast({
          type: 'error',
          message: 'An error ocurred. 😔'
        });
        setTimeout(() => setToast(INITIAL_MESSAGE), 3000);
      }
    }
  };

  return (
    <div>
      {toast.message && (
        <div className={clsx(styles.toast, {
          [styles.toastSuccess]: toast.type === 'success',
          [styles.toastError]: toast.type === 'error',
        })}>
          {toast.message}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input
              id="name"
              type="text"
              className={clsx(styles.formInput, { [styles.formFieldError]: errors.name })}
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className={styles.formErrorMessage}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              id="email"
              type="email"
              className={clsx(styles.formInput, { [styles.formFieldError]: errors.email })}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className={styles.formErrorMessage}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.formLabel}>Company</label>
            <input
              type="text"
              id="company"
              className={clsx(styles.formInput, { [styles.formFieldError]: errors.company })}
              {...register('company')}
            />
          </div>
          {errors.company && (
            <p className={styles.formErrorMessage}>{errors.company.message}</p>
          )}
        </div>
        <div className={styles.formGroupMessage}>
          <label htmlFor="message" className={styles.formLabel}>Message</label>
          <textarea
            id="message"
            className={clsx(styles.formTextArea, { [styles.formFieldError]: errors.message })}
            rows={8}
            {...register('message')}
          ></textarea>
          {errors.message && (
            <p className={styles.formErrorMessage}>{errors.message.message}</p>
          )}
        </div>
        <div className={styles.sendGroup}>
          <button
            type="submit"
            className={styles.formButton}
          >
            <span>Contact Me</span>
            <ArrowUpRightIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
