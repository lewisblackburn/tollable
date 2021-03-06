import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <Form
      submitText="Create Account"
      schema={Signup}
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      onSubmit={async (values) => {
        try {
          await signupMutation(values)
          props.onSuccess?.()
        } catch (error: any) {
          if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            // This error comes from Prisma
            return { email: "This email is already being used" }
          } else {
            return { [FORM_ERROR]: error.toString() }
          }
        }
      }}
    >
      <LabeledTextField name="email" label="Email" placeholder="" />
      <LabeledTextField name="password" label="Password" placeholder="" type="password" />
      <LabeledTextField
        name="confirmPassword"
        label="Confirm Password"
        placeholder=""
        type="password"
      />
    </Form>
  )
}

export default SignupForm
