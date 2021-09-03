import { Form, Input, Button } from 'antd';
const LoginForm=({ onSubmit,initialValues })=>{
  return (<div>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={initialValues}
      layout='vertical'
      onFinish={onSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите ваше имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit">
        Войти
        </Button>
      </Form.Item>
    </Form></div>);
};
export default LoginForm;
