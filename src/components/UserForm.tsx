import { FormData } from "../types";
import styled from "styled-components";
import { postFormData } from "../services/postFormData";
import { useRouter } from "next/router";
import { useCallback } from "react";

type Props = {
  data: FormData;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  width: 100%;
  padding: 0 1rem;
`;

const Input = styled.input`
  background: transparent;
  outline: none;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    transition: border-bottom 200ms linear;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
`;

const Select = styled.select`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  height: 2rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    transition: border 200ms linear;
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
  
  :hover {
    background: #ff9900;
    transition: background 200ms linear;
  }
`;

const UserForm = ({ data }: Props) => {
  const router = useRouter();
  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const { name, email, password, states, occupations } = e.target.elements;
      const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        state: states.value,
        occupation: occupations.value,
      };

      postFormData(payload).then((res) => {
        if (res.ok) router.push(`/welcome?name=${payload.name}`);
      });
    },
    [router]
  );

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
      <Input
        id="occupations"
        list="occupation-list"
        required
        aria-label="occupation"
      />
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
