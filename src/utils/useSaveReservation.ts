import { useState } from "react";
import axios from "axios";

const useSaveReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendReservationToFirebase = async (reservationData: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const firebaseUrl =
        "https://dineeasy-931ce-default-rtdb.europe-west1.firebasedatabase.app/reservations.json";

      await axios.post(firebaseUrl, reservationData);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { sendReservationToFirebase, loading, error, success };
};

export default useSaveReservation;
