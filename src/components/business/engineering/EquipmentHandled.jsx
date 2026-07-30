import tataMotorsImage from "../../../assets/images/services/engineering/tata-motors.png";
import eicherImage from "../../../assets/images/services/engineering/eicher-motors.png";
import ashokLeylandImage from "../../../assets/images/services/engineering/ashok-leyland.png";
import bharatBenzImage from "../../../assets/images/services/engineering/Bharatbenz-logo.png";
import allTrailerImage from "../../../assets/images/services/engineering/all-trailer.png";
import agriculturalEquipmentImage from "../../../assets/images/services/engineering/agriculture-logo.png";


const equipment = [
  { title: "Tata Tippers", image: tataMotorsImage },
  { title: "Eicher", image: eicherImage },
  { title: "Ashok Leyland", image: ashokLeylandImage },
  { title: "BharatBenz", image: bharatBenzImage },
  { title: "All Trailers", image: allTrailerImage },
  { title: "Agricultural Equipment", image: agriculturalEquipmentImage },
];

function EquipmentHandled() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Equipment We Handle</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Experience Across Leading Vehicles & Equipment</h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {equipment.map((item) => (
            <article key={item.title} className="flex min-h-40 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(37,99,235,0.10)]">
              <div className="flex h-28 items-center justify-center bg-linear-to-br from-white to-blue-50 p-5 sm:h-32">
                <img
                  src={item.image}
                  alt={`${item.title} logo`}
                  className="max-h-20 w-full max-w-[88%] object-contain sm:max-h-24"
                />
              </div>
              <h3 className="flex flex-1 items-center justify-center border-t border-slate-100 px-3 py-4 text-center text-sm font-semibold text-slate-800">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentHandled;
