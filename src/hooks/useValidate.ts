import { useState, useCallback } from 'react';

interface validateInter {
  id?: string;
  password?: string;
}

const useValidate = ({ id, password }: validateInter) => {
  const [error, setError] = useState('');

  const idValid =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const passwordValid =
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$|(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const isValid =
    idValid.test(id as string) && passwordValid.test(password as string);

  const message = isValid ? '' : '아이디와 비밀번호를 확인해주세요.';

  const handleError = useCallback(() => {
    setError(message);
    console.log(idValid.test(id as string));
    console.log(passwordValid.test(password as string));
  }, [id, password]);

  return { isValid, error, handleError };
};

export default useValidate;
