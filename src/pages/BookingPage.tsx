import { useState } from "react";
import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import moment from "moment";
import Card from "../components/Card";
import ClientContactInfo from "../components/ClientContactInfo";

import { v4 as uuidv4 } from "uuid";
import { useSendConfirmation } from "../utils/useSendConfirmation";
import Successful from "../components/Successful";

const maxNumPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface FormData {
  name: String;
  email: String;
  numPeople: Number;
  date: String;
  time: String;
  id: String;
}

const BookingPage = () => {
  const { sendConfirmation } = useSendConfirmation();
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numPeople: 0,
    date: "",
    time: "",
    id: uuidv4(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selected) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: moment(selected).format("YYYY-MM-DD"),
      }));
    }

    sendConfirmation(formData);
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center pb-20  overflow-y-scroll overflow-x-hidden">
        <h2 className="font-bold text-4xl text-center my-5">
          Reservierung vornehmen
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <div className="flex justify-center  gap-4 w-full items-center md:flex-col sm:flex ">
            <div className="xl:flex xl:gap-3 xl:w-full xl:justify-end">
              <Card style="text-white !bg-opacity-75 mt-40 sm:mt-20 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <h3 className="font-bold text-2xl my-5 w-full text-center">
                  Anzahl der Gäste.
                </h3>
                <>
                  {maxNumPeople.map((num) => {
                    return (
                      <Button
                        key={num}
                        className={`w-3 h-3 !p-5 m-4 !border-white rounded-md !hover:bg-primary ${
                          num === formData.numPeople
                            ? "bg-primary text-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setFormData({
                            ...formData,
                            numPeople: num,
                          });
                        }}
                        type="button"
                      >
                        {num}
                      </Button>
                    );
                  })}
                </>
              </Card>
              <Card style="!bg-opacity-50 flex justify-center items-center  xl:!w-[330px] xl:!h-[500px]">
                <Calendar
                  selectedDate={selected}
                  setSelectedDate={setSelected}
                />
              </Card>
            </div>
            <div className="xl:flex xl:gap-4 xl:w-full xl:justify-start">
              <Card style="!bg-opacity-25 xl:mt-40 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <ClientContactInfo data={formData} dataChange={handleChange} />
              </Card>
              <Card style="!bg-opacity-10 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-center font-semibold">Summary</h3>
                  <p className="text-center font-medium">
                    Reservierungsdatum ist::{" "}
                    {selected ? moment(selected).format("DD.MM.YYYY") : "N/A"}
                  </p>
                  {formData.numPeople > 1 && (
                    <p className="text-center font-medium">
                      {formData.numPeople} Gäste
                    </p>
                  )}
                  {formData.time && (
                    <p className="text-center font-medium">
                      Am {formData.time}
                    </p>
                  )}
                  <p className="text-center font-medium">
                    Sie können jederzeit stornieren, bitte geben Sie uns nur
                    Bescheid.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <Button
            className={`mt-16 mb-10 ${
              !formData.name || !formData.email || !selected || !formData.time
                ? "cursor-not-allowed"
                : ""
            }`}
            disabled={
              !formData.name || !formData.email || !selected || !formData.time
            }
            type="submit"
          >
            Reservieren
          </Button>
        </form>
      </div>
      {showModal && <Successful closeModal={setShowModal} />}
    </>
  );
};

export default BookingPage;
