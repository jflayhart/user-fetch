import { FormData } from '../types'
import styled from "styled-components";

type Props = {
    data: FormData
}

const Form = styled.form`
  width: 30rem;
  padding: 0 1rem;
`

const Input = styled.input`
  display: block;
  background: transparent;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: 1rem;
  
  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
`

const Select = styled.select`
  width: 100%;
  background: transparent;
  color: white;
  height: 2rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

const Button = styled.button`
  color: black;
  background: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 0.2rem;
  width: 50%;
  height: 2rem;
  cursor: pointer;
`

const UserForm = ({ data }: Props) => {
    function handleSubmit(e: any) {
        e.preventDefault();
        const payload = {
             name: e.target.name.value,
             email: e.target.email.value,
             password: e.target.password.value,
             state: e.target.states.value,
             occupation: e.target.occupations.value,
        }
        // TODO send payload
        console.log('TODO', payload)
    }

    return (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" required />

          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />

          <Label htmlFor="email">Password</Label>
          <Input id="password" type="password" required />

          <Label htmlFor="email">State</Label>
          <Select id="states" required>
              {data.states.map((state) => <option key={state.abbreviation} id={state.abbreviation} value={state.abbreviation}>{state.name}</option>)}
          </Select>

          <Label htmlFor="email">Occupation</Label>
          <Input id="occupations" list="occupation-list" required />
          <datalist id="occupation-list">
              {data.occupations.map((occ, i) => <option key={i} id={occ} value={occ}>{occ}</option>)}
          </datalist>

          <Button type="submit">Submit</Button>
        </Form>
    )
}

export default UserForm