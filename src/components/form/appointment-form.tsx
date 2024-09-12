import React, { useState } from 'react';
import { InputComponent } from '../input-component/input-component';
import './appointmentForm.css';

interface Appointment {
  description?: string;
  dueDate?: string;
  category?: string;
}

interface AppointmentFormProps {
  appointment?: Appointment;
  onSubmit: (appointment: Appointment) => void;
  onReset: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ appointment, onSubmit, onReset }) => {
  const [description, setDescription] = useState(appointment?.description || '');
  const [dueDate, setDueDate] = useState(appointment?.dueDate || '');
  const [selectedOption, setSelectedOption] = useState(appointment?.category || '');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ description, dueDate, category: selectedOption });
  };

  const handleReset = () => {
    setDescription('');
    setDueDate('');
    setSelectedOption('');
    onReset();
  };

  return (
    <div className="flex flex-col">
      <header>
        <h2 id="titleDialog" className="py-3 px-2">
          {appointment ? 'Edit appointment' : 'Create appointment'}
        </h2>
        <button className="px-4 py-3">x</button>
      </header>
      <section>
        <form
          id="createForm"
          className="flex flex-col justify-center gap-4"
          onSubmit={handleSubmit}
          onReset={handleReset}>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="description" className="py-3 px-4">
              Description
            </label>
            <textarea
              autoFocus
              id="description"
              name="description"
              placeholder="Describe your appointment"
              value={description}
              onChange={handleDescriptionChange}></textarea>
            <span id="errorDescription" className="error"></span>
          </div>
          <div className="flex flex-date">
            <div className="flex flex-col gap-2 px-4">
              <label htmlFor="dueDate">Due Date</label>
              <InputComponent
                variant="primary"
                type="datetime-local"
                id="dueDate"
                name="dueDate"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 pt-1">
              <label htmlFor="category">Category</label>
              <select name="tag" id="category" value={selectedOption} onChange={handleCategoryChange}>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="job">Job</option>
                <option value="sport">Sport</option>
                <option value="hobby">Hobby</option>
                <option value="gym">Gym</option>
                <option value="school">School</option>
              </select>
              <span id="errorCategory" className="error"></span>
            </div>
          </div>
        </form>
      </section>
      <footer className="flex gap-2 justify-center">
        <InputComponent
          variant="primary"
          type="submit"
          className="flex h-10 items-center justify-center rounded"
          value="Submit"
        />
        <InputComponent
          variant="primary"
          type="reset"
          className="flex h-10 items-center justify-center rounded"
          value="Reset"
        />
      </footer>
    </div>
  );
};
