import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { LoginUserDto } from '../../models/User/UserDto';
import validation from '../../constants/user-validation';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';
import Input from '../../UI/Input';
import Eye from '../../UI/Eye';
import MainButton from '../../UI/MainButton';
import { useAppDispatch } from '../../hooks/redux';
import { loginUser } from '../../redux/asyncActions/user';
import { Routes } from '../../enums/routes';

const SignInForm = () => {
  const { password, email } = validation;
  const { isVisible, toggle } = usePasswordVisibility();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUserDto>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<LoginUserDto> = (data: LoginUserDto) => {
    dispatch(loginUser(data));
    const origin = location.state?.from?.pathname || Routes.Home;
    navigate(origin, { replace: true });
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input<LoginUserDto>
          name={'email'}
          label={'Email'}
          register={register}
          options={{
            required: email.required,
            pattern: { value: email.pattern, message: email.message },
          }}
          errors={errors}
        />
        <Input<LoginUserDto>
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
            Sign In
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
