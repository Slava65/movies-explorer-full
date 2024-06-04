import React, { useCallback } from "react";
export default function useFormWithValidation() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setData(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setData, setErrors, setIsValid]
  );

  return { data, handleChange, errors, isValid, resetForm };
}


