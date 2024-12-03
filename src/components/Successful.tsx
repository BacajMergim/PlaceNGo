import Card from "./Card";
import Button from "./Button";
interface Props {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function Successful({ closeModal }: Props) {
  const handleCloseModal = () => {
    closeModal(false);
  };

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <Card style="relative w-[90%] max-w-md h-fit  rounded-lg shadow-lg">
        <h2 className="p-5 text-lg font-semibold text-white">Erfolgreich!</h2>
        <div className="flex justify-end p-4">
          <Button
            onClick={handleCloseModal}
            className="px-5 py-3 bg-white rounded hover:!bg-white"
          >
            Weiter
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Successful;
