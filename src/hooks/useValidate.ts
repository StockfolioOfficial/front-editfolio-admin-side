import { useState, useCallback } from 'react';

interface validateInter {
  id?: string;
  password?: string;
}

const useValidate = ({ id, password }: validateInter) => {
  const [error, setError] = useState('');

  const idValid =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const passwordValid = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

  const isValid =
    idValid.test(id as string) && passwordValid.test(password as string);

  const message = isValid ? '' : '아이디와 비밀번호를 확인해주세요.';

  const handleError = useCallback(() => {
    setError(message);
  }, [id, password]);

  return { isValid, error, handleError };
};

export default useValidate;
