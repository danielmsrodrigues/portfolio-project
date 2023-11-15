import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ErrorMessage,
  Form,
  InputWrapper,
  LeftCol,
  Title,
  Warn,
  Wrapper,
} from "./styles";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contacts() {
  const form = useRef<HTMLFormElement | null>(null);

  const notify = () => {
    toast.success("Message Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    emailjs
      .sendForm(
        "service_tihig7b",
        "template_xl2tu3s",
        form.current!,
        "JwKF6MpC6x89uvKAG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    notify();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div id="contact"></div>

      <Wrapper>
        <LeftCol>
          <Title>
            <p>Do you have any question?</p>
            <span>Contact me!</span>
          </Title>

          <Form action="post" ref={form} onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <input
                type="text"
                id="name"
                placeholder="Name *"
                {...register("name", {
                  required: "This field is required.",
                  minLength: {
                    value: 2,
                    message: "Minimum length of 2 characters.",
                  },
                })}
              />
              {errors.name && (
                <ErrorMessage>
                  <small>{errors.name?.message}</small>
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <input
                type="email"
                id="email"
                placeholder="Email *"
                {...register("email", {
                  required: "This field is required.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>
                  <small>{errors.email?.message}</small>
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                id="subject"
                placeholder="Subject *"
                {...register("subject", {
                  required: "This field is required.",
                  minLength: {
                    value: 5,
                    message: "Minimum length of 5 characters.",
                  },
                })}
              />
              {errors.subject && (
                <ErrorMessage>
                  <small>{errors.subject?.message}</small>
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <textarea
                id="message"
                placeholder="Message"
                {...register("message", {
                  minLength: {
                    value: 10,
                    message: "Minimum length of 10 characters.",
                  },
                })}
              />
              {errors.message && (
                <ErrorMessage>
                  <small>{errors.message?.message}</small>
                </ErrorMessage>
              )}
            </InputWrapper>
            <Warn>
              <small>Fields with an * are required.</small>
            </Warn>
            <button type="submit">Send</button>
          </Form>
        </LeftCol>
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default Contacts;
