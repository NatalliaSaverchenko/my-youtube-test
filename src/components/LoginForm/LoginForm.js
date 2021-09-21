import { Form, Input, Button } from 'antd';
import { LogoIcon } from '../LogoIcon';
import styles from './LoginForm.module.css';
const LoginForm = ({
  onSubmit,
  initialValues,
}) => {
  return (
    <div className = {styles.container}>
      <LogoIcon/>
      <h3
        className = {styles.title}
      >
          Вход
      </h3>
      <Form
        className = {styles.form}
        name = "basic"
        initialValues = {initialValues}
        layout = 'vertical'
        onFinish = {onSubmit}
        autoComplete = "off"
      >
        <Form.Item
          label = "Логин"
          name = "username"
          rules = {[
            {
              required: true,
              message: 'Введите ваше имя!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label = "Пароль"
          name = "password"
          rules = {[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol = {{
            offset: 10,
            span: 16,
          }}
        >
          <Button
            type = "primary"
            htmlType = "submit">
        Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
