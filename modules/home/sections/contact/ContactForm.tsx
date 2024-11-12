"use client";

import { FieldValues, useForm } from "react-hook-form";
import styles from './ContactForm.module.css';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import clsx from "clsx";

const ContactForm = () => {
  const { register, handleSubmit, formState, clearErrors, reset } = useForm({
    defaultValues: {
      name: 'John Doe',
      email: 'johnny@gmail.com',
      topic: 'Talent Inquiry',
      message: 'Nisi esse voluptate aliqua nostrud cupidatat duis proident in sunt reprehenderit consequat est eu. Tempor proident exercitation laboris ut cupidatat ipsum laborum sint mollit mollit labore nulla. Commodo ad id in laboris ullamco ut laborum reprehenderit ad exercitation qui ad esse. Amet cupidatat aliquip in minim mollit eiusmod qui esse tempor incididunt consectetur voluptate eu qui. Duis sit esse voluptate minim ea proident laborum eiusmod.',
    }
  });

  const { errors, isValid } = formState;

  const onSubmit = (data: FieldValues) => {
    console.table(data);
    clearErrors();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formField}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Name</label>
          <input
            id="name"
            type="text"
            className={clsx(styles.formInput, { [styles.formFieldError]: errors.name })}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long'
              },
              maxLength: {
                value: 100,
                message: 'Name must be at most 100 characters long'
              }
            })}
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
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email is not valid'
              }
            })}
          />
        </div>
        {errors.email && (
          <p className={styles.formErrorMessage}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.formField}>
        <div className={styles.formGroup}>
          <label htmlFor="topic" className={styles.formLabel}>Topic</label>
          <input
            type="text"
            id="topic"
            className={clsx(styles.formInput, { [styles.formFieldError]: errors.topic })}
            {...register('topic', {
              required: 'Topic is required',
              minLength: {
                value: 4,
                message: 'Topic must be at least 4 characters long'
              },
              maxLength: {
                value: 100,
                message: 'Topic must be at most 100 characters long'
              }
            })}
          />
        </div>
        {errors.topic && (
          <p className={styles.formErrorMessage}>{errors.topic.message}</p>
        )}
      </div>

      <div className={styles.formGroupMessage}>
        <label htmlFor="message" className={styles.formLabel}>Message</label>
        <textarea
          id="message"
          className={clsx(styles.formTextArea, { [styles.formFieldError]: errors.message })}
          rows={8}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 8,
              message: 'Message must be more than 8 characters long'
            },
            maxLength: {
              value: 500,
              message: 'Message must be less than 250 characters long'
            }
          })}
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
  );
};

export default ContactForm;
