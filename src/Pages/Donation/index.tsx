import React from "react";

import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Select,
  Option,
  Button,
  Footer,
} from "./style";
import { SEVA_OPTIONS } from "./constant";

export const Donation = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Title>Donate Now</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          SEVA:
          <Select id="SEVA" name="SEVA">
            {SEVA_OPTIONS.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Label>
        <Label>
          Name:
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Phone:
          <Input type="tel" name="contact" />
        </Label>
        <Label>
          Amount:
          <Input type="number" name="amount" />
        </Label>
        <Button type="submit">Donate</Button>
      </Form>
    </Wrapper>
  );
};
