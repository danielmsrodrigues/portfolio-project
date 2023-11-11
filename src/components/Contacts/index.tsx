import { FormEvent, useState } from "react";
import { Form, LeftCol, Title, Wrapper } from "./styles";

function Contacts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Wrapper>
      <LeftCol>
        <Title>
          <p>Do you have any question?</p>
          <span>Contact me!</span>
        </Title>

        <Form action="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name *"
            required
            onChange={handleName}
            value={name}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
            onChange={handleEmail}
            value={email}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject *"
            required
            onChange={handleSubject}
            value={subject}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message *"
            onChange={handleMessage}
            value={message}
          />
          <button type="submit">Send</button>
        </Form>
      </LeftCol>
    </Wrapper>
  );
}

export default Contacts;
