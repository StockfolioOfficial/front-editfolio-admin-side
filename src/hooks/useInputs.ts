import { useState, useCallback } from 'react';

const useInput = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

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

  return { values, handleChange, handleSubmit, reset };
};

export default useInput;
