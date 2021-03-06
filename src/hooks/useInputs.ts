import { useState, useCallback } from 'react';

const useInput = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleSubmit = useCallback(
    (submitAction) => {
      submitAction();
      reset();
    },
    [values],
  );

  const reset = useCallback(() => setValues(initialValues), [initialValues]);

  return { values, handleChange, handleSubmit, reset, setValues };
};

export default useInput;
