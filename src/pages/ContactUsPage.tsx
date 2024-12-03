import Card from "../components/Card";
import outsidePic from "../assets/images/OutsidePic.png";
import Map from "../components/Map";
function ContactUsPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-between ml-28 my-5 h-screen w-full gap-5 sm:ml-7 sm:mt-8 sm:h-full">
      <Card style={"!bg-opacity-10"}>
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-black text-center text-lg font-bold">
            Kontaktieren Sie uns
          </h2>
          <p className="text-sm mt-2">
            Sie können uns telefonisch unter der folgenden Nummer erreichen:
          </p>
          <p className="text-sm font-medium">Telefonnummer: +41 123 543 1231</p>
          <p className="text-sm mt-4">
            Alternativ können Sie uns auch per E-Mail kontaktieren:
          </p>
          <p className="text-sm font-medium">E-Mail: placengo@gmail.com</p>
        </div>
      </Card>
      <Card style={"!bg-opacity-25 lg:mt-[120px] !p-0"}>
        <div className="flex flex-col justify-between h-[400px] rounded-md  w-full !overflow-hidden">
          <Map />
        </div>
      </Card>
      <Card style={"!bg-opacity-30 lg:mt-[250px] !p-2"}>
        <div className="flex flex-col justify-between h-full ">
          <h3 className="text-black text-center text-lg font-bold">Über uns</h3>
          <p className="text-black">
            Bei PlaceNGo stehen Qualität, Tradition und Professionalität im
            Mittelpunkt. Mit langjähriger Erfahrung in der Gastronomie schaffen
            wir ein außergewöhnliches kulinarisches Erlebnis, das höchsten
            Ansprüchen gerecht wird. Unsere Gerichte werden mit Sorgfalt aus
            besten Zutaten zubereitet, begleitet von einem Service, der keine
            Wünsche offen lässt. Entdecken Sie die Perfektion unserer Küche und
            die Leidenschaft eines erfahrenen Teams.
          </p>
        </div>
      </Card>
      <Card style={"!bg-opacity-40 lg:mt-[380px] !p-0 mb-28"}>
        <div className="flex flex-col justify-between h-[inherit] rounded-md overflow-hidden w-full ">
          <img
            className="w-full h-full object-cover "
            src={outsidePic}
            alt="Ein Foto von den ort"
          />
        </div>
      </Card>
    </div>
  );
}

export default ContactUsPage;
