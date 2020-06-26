import React from "react";
import { Button } from "reactstrap";
import { InputField } from "components";
import { Formik, Field, Form } from "formik";
import { signInRequest } from "utils/services";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

const LoginFormContainer = styled.div`
  border: 1px solid #efefef;
  padding: 30px;
  width: 600px;
  min-height: 300px;
  height: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`;

const LoginFormTitle = styled.div`
  font-size: 30px;
  text-align: center;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

interface IProps {
  authToken: string;
  setAuthToken: Function;
}

export const LoginForm: React.FC<IProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        signInRequest(values)
          .then((res) => {
            enqueueSnackbar("Login Successful!", {
              variant: "success",
              autoHideDuration: 2500,
            });
            props.setAuthToken(res.data?.token);
            history.push("/dashboard");
          })
          .catch((err) => {
            enqueueSnackbar("Oops! Something went wrong!", {
              variant: "error",
              autoHideDuration: 2500,
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {(props) => (
        <Form>
          <LoginFormContainer>
            <LoginFormTitle>Sign In</LoginFormTitle>
            <Field
              label="Username"
              type="text"
              name="username"
              id="Username"
              placeholder="Input your username"
              component={InputField}
            />
            <Field
              label="Password"
              type="password"
              name="password"
              id="Password"
              placeholder="Input your password"
              component={InputField}
            />
            <LoginButtons>
              <Button
                type="submit"
                color="primary"
                disabled={props.isSubmitting}
              >
                Sign In
              </Button>
            </LoginButtons>
          </LoginFormContainer>
        </Form>
      )}
    </Formik>
  );
};
