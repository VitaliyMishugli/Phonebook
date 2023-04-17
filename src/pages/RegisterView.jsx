import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterView = ()=> {
  return (
    <div>
      <h2>Registration page</h2>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}

export default RegisterView;