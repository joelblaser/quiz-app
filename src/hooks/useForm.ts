import { useState } from 'react';

export function useForm<T>(submitCallback: () => void) {
  const [data, setData] = useState<T>({} as T);

  const handleChange = (event: any) => {
    event.persist();
    setData((value) => ({ ...value, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitCallback();
  };

  const clearForm = () => {
    setData({} as T);
  };

  return [data, handleChange, handleSubmit, clearForm] as [
    T,
    (event: any) => void,
    (event: any) => void,
    () => void
  ];
}
