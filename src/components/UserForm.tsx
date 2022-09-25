import { FormData } from "../types";
import styled from "styled-components";
import { postFormData } from "../services/postFormData";
import Router from "next/router";

type Props = {
  data: FormData;
};

const Form = styled.form`
  width: 30rem;
  padding: 0 1rem;
`;

const Input = styled.input`
  display: block;
  background: transparent;
  outline: none;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: 1rem;

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
`;

const Select = styled.select`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  height: 2rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Button = styled.button`
  color: black;
  background: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 0.2rem;
  width: 50%;
  height: 2rem;
  cursor: pointer;
`;

const UserForm = ({ data }: Props) => {
  function handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      state: e.target.states.value,
      occupation: e.target.occupations.value,
    };
    postFormData(payload).then((res) => {
      if (res.ok) Router.push(`/welcome?name=${payload.name}`)
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" required aria-label="name" />

      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" required aria-label="email" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" required aria-label="password" />

      <Label htmlFor="state">State</Label>
      <Select id="states" required aria-label="state">
        {data.states.map((state) => (
          <option
            key={state.abbreviation}
            id={state.abbreviation}
            value={state.abbreviation}
          >
            {state.name}
          </option>
        ))}
      </Select>

      <Label htmlFor="occupations">Occupation</Label>
      <Input id="occupations" list="occupation-list" required aria-label="occupations" />
      <datalist id="occupation-list">
        {data.occupations.map((occ, i) => (
          <option key={i} id={occ} value={occ}>
            {occ}
          </option>
        ))}
      </datalist>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UserForm;
