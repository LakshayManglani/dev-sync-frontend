export const extractRegisterFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const { firstName, lastName, username, email, password } = Object.fromEntries(
    formData.entries()
  ) as {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  };
  return {
    givenName: firstName,
    familyName: lastName,
    username,
    email,
    password,
  };
};

export const extractLoginFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const { emailOrUsername, password } = Object.fromEntries(
    formData.entries()
  ) as {
    emailOrUsername: string;
    password: string;
  };
  return { emailOrUsername, password };
};
