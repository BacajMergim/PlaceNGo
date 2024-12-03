import axios from "axios";
import { useState } from "react";
import { FormData } from "../pages/BookingPage";

export const useSendConfirmation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendConfirmation = async (formData: FormData) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await axios.post("http://localhost:3000/reservations", formData);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, isError, sendConfirmation };
};
