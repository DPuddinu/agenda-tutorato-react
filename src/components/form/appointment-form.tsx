import { Appointment, AppointmentPayload, AppointmentPayloadSchema } from '@/models/appointment';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../input-component/input-component';
import styles from './appointmentForm.module.css';

interface Props {
  appointment?: Appointment;
}

export const AppointmentForm = ({ appointment }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<AppointmentPayload>({
    resolver: zodResolver(AppointmentPayloadSchema),
    defaultValues: appointment
      ? {
          ...appointment,
          dueDate: appointment.dueDate || undefined
        }
      : undefined
  });

  return (
    <form
      className="flex flex-col justify-center gap-4"
      onSubmit={handleSubmit(
        (data) => console.log(data),
        (error) => console.log(error)
      )}
      onReset={() => reset()}>
      <div className="flex flex-col justify-center gap-1">
        <label htmlFor="description" className={`py-3 ${styles.label}`}>
          Description
        </label>
        <textarea
          {...register('description')}
          autoFocus
          placeholder="Describe your appointment"
          className={styles.textarea}></textarea>
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>
      <div className={`flex ${styles.flexDate}`}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="dueDate" className={styles.label}>
            Due Date
          </label>
          <InputComponent
            {...register('dueDate', {
              valueAsDate: true
            })}
            variant="primary"
            type="datetime-local"
          />
          {errors.dueDate && <span className="error">{errors.dueDate.message}</span>}
        </div>
        <div className="flex flex-col gap-2 py-2 pt-1">
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <select
            {...register('categoryId', {
              valueAsNumber: true
            })}
            className={styles.select}>
            <option value="" disabled>
              Select an option
            </option>
            <option value="1">Job</option>
            <option value="2">Sport</option>
            <option value="3">Hobby</option>
            <option value="4">Gym</option>
            <option value="5">School</option>
          </select>
          {errors.categoryId && <span className="error">{errors.categoryId.message}</span>}
          <div className="flex gap-2">
            <InputComponent
              disabled={isSubmitting}
              variant="primary"
              type="submit"
              className="flex h-10 items-center justify-center rounded"
            />
            <InputComponent variant="primary" type="reset" className="flex h-10 items-center justify-center rounded" />
          </div>
        </div>
      </div>
    </form>
  );
};
