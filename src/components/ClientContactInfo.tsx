interface Props {
  data: { name: string; email: string; time: string };
  dataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ClientContactInfo({ data, dataChange }: Props) {
  return (
    <div className="flex flex-col justify-between h-full">
      <label className="text-center">
        <p className="text-center font-semibold pb-5">
          Bitte wählen Sie die Uhrzeit aus:{" "}
        </p>
        <input
          className="bg-transparent border border-black px-1 rounded-md hover:cursor-text w-[50%] h-10"
          type="time"
          name="time"
          value={data.time || "00:00"}
          onChange={dataChange}
        />
      </label>
      <div>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={dataChange}
          className="w-[255px] flex  items-center justify-center py-2.5 pl-3 pr-14 font-medium border-blue-darker border bg-transparent my-5 rounded-md"
        />

        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={dataChange}
          className="w-[255px] flex items-center justify-center py-2.5 pl-3 font-medium border-blue-darker border bg-transparent my-5 rounded-md"
        />
      </div>
    </div>
  );
}

export default ClientContactInfo;
