import david from "../assets/singers/david.jpg";
import naga from "../assets/singers/naga.jpg";
import rocket from "../assets/home/rocket.png";
import withnine from "../assets/singers/withnine.jpg";
import djkarma from "../assets/djKarma.jpg";
import neela from "../assets/singers/neelanjana.jpg";

const singer = [
  {
    sl: 1,
    Name: "DAVID ANGU",
    Day: "XX-11-2023",
    img: david,
  },

  {
    sl: 2,
    Name: "KL PAMEI",
    Day: "XX-11-2023",
    img: naga,
  },

  {
    sl: 3,
    Name: "WITHNINE",
    Day: "XX-11-2023",
    img: withnine,
  },

  {
    sl: 4,
    Name: "DJ KARMA",
    Day: "XX-11-2023",
    img: djkarma,
  },

  {
    sl: 5,
    Name: "NEELANJANA RAY",
    Day: "XX-11-2023",
    img: neela,
  }, 
];

export default function Singer() {
  return (
    <section
      className="min-h-screen py-10 mt-10 py-20 px-4"
      data-aos="fade-up-right"
      data-aos-delay="10"
    >
      <div className="container mx-auto rounded-lg py-10 bg-red-300  border-blue-300 border-2 ">
        <h1 className="singerHeader text-center text-white mb-10">ARTIST</h1>
        <div className="flex flex-col lg:flex-row px-10 gap-6 items-center justify-center py-10 px-6 ">
          {singer.map((items) => (
            <div
              key={items.sl}
              className="border-2 border-orange-300 backdrop-blur py-2 px-2"
            >
              <img
                className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] rounded-full"
                src={items.img}
                alt=""
              ></img>
              <div className="flex flex-col items-center justify-center">
                <h2 className="singerHead text-center text-white text-xl ">
                  {items.Name}
                </h2>
                <p className="singerHead text-center text-white">{items.Day}</p>
              </div>
            </div>
          ))}

          <img
            className="relative left-[100px] lg:left-[15px] rocket  h-36"
            src={rocket}
            alt="avatar"
          ></img>
        </div>
      </div>
    </section>
  );
}
