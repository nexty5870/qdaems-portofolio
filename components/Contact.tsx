import React from "react";
import { IconPhoneIncoming, IconMapPin, IconMail } from "@tabler/icons-react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:hey@qdaems.me?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D2C5B4]">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have a passion for creating.{" "}
          <span className="underline decoration-[#A741D4]"> Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <IconPhoneIncoming className="h-7 w-7 animate-pulse text-[#A741D4]" />
            <p className="text-2xl">+12345678</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <IconMail className="h-7 w-7 animate-pulse text-[#A741D4]" />
            <p className="text-2xl">hey@qdaems.me</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <IconMapPin className="h-7 w-7 animate-pulse text-[#A741D4]" />
            <p className="text-2xl">02-972, Warsaw</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="font-bolder rounded-md bg-[#A741D4] py-5 px-10 uppercase text-black"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
