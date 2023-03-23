import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { RegisterUserDto } from '../../models/User/UserDto';
import validation from '../../constants/user-validation';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';
import Input from '../../UI/Input';
import Eye from '../../UI/Eye';
import MainButton from '../../UI/MainButton';
import { useAppDispatch } from '../../hooks/redux';
import { registerUser } from '../../redux/asyncActions/user';
import { Routes } from '../../enums/routes';

const SignUpForm = () => {
  const { username, password, email } = validation;
  const { isVisible, toggle } = usePasswordVisibility();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterUserDto>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<RegisterUserDto> = (data: RegisterUserDto) => {
    dispatch(registerUser(data));
    const origin = location.state?.from?.pathname || Routes.Home;
    navigate(origin, { replace: true });
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input<RegisterUserDto>
          name={'username'}
          label={'Username'}
          register={register}
          options={{
            required: username.required,
            minLength: { value: 3, message: username.message },
          }}
          errors={errors}
        />
        <Input<RegisterUserDto>
          name={'email'}
          label={'Email'}
          register={register}
          options={{
            required: email.required,
            pattern: { value: email.pattern, message: email.message },
          }}
          errors={errors}
        />
        <Input<RegisterUserDto>
          name={'password'}
          label={'Password'}
          register={register}
          options={{
            required: password.required,
            minLength: { value: 4, message: password.message },
          }}
          errors={errors}
          isVisible={isVisible}
        >
          <Eye handleClick={toggle} />
        </Input>
        <div onClick={handleSubmit(onSubmit)} className={styles.button}>
          <MainButton inverted={false} padding={'20px 30px'}>
            Sign Up
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
