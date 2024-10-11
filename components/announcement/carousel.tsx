import Image from "next/image";
import Link from "next/link";

// Define the type for the CarouselItem props
interface CarouselItemProps {
  title: string;
  imageSrc: string;
  dateTime: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  imageSrc,
  dateTime,
}) => (
  <div className="snap-center w-[213px] flex-shrink-0 flex flex-col items-center justify-center">
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <Image
      src={imageSrc}
      alt={title}
      width={213}
      height={325}
      className="rounded-lg object-cover"
      style={{ objectFit: "cover", width: "213px", height: "325px" }}
    />
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-500">{dateTime}</p>
    </div>
  </div>
);

export default function Carousel() {
  const items = [
    {
      title: "Main Gate Close due to Renovation",
      imageSrc:
        "https://toprealty.com.ph/wp-content/uploads/2022/06/parkridge.jpg",
      dateTime: "2024-10-01 10:30 AM",
    },
    {
      title: "Vehicle Accident - Sumulong",
      imageSrc:
        "https://d78e7d51k2tkt.cloudfront.net/bc52d64e649b4e23ab1b0ef43fbce637.webp",
      dateTime: "2024-10-01 11:45 AM",
    },
    {
      title: "Heavy Traffic in Marcos Highway",
      imageSrc: "https://pbs.twimg.com/media/CdgEFDrUYAA_8DT.jpg",
      dateTime: "2024-10-01 12:00 PM",
    },
    {
      title: "Simbang Gabi Schedule for December",
      imageSrc:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVtVY_kv8i_APLNsyJfBy9OaDiniygaq1AF3iC15Kollg9sV9K3X574EGMgPR3Edtirwz9N3el04S2y4o-Vfixaswq7A39b4Ob-CPwMJB6sqgLbwUAJOPzVw-XgIkX-0JwD7S7p_SBJm-JcFnQzbLiGC5FQVVdhsBNulV65LcP7Gzzz-WVM-NOmB5XQA/s2048/San%20Pedro%20Calungsod%20Parish%20-%20Sta.%20Cruz,%20Antipolo%20City,%20Rizal.jpg",
      dateTime: "2024-10-02 09:15 AM",
    },
    {
      title: "3x3 Basket Ball Tournament",
      imageSrc:
        "https://marketplace.canva.com/EAFqmAGGZbE/1/0/283w/canva-orange-and-white-bold-basketball-tournament-document-a4-vkPJPFdeHY4.jpg",
      dateTime: "2024-10-02 10:45 AM",
    },
    {
      title: "ParkRidge Gym Opening at the clubhouse",
      imageSrc:
        "https://marketplace.canva.com/EAE6jwsJsL8/1/0/1131w/canva-black-minimalist-gym-center-promo-poster-btQabfai1Wo.jpg",
      dateTime: "2024-10-03 01:00 PM",
    },
  ];

  return (
    <main>
      <div>
        <h1 className="font-extrabold text-3xl pt-2.5 text-left">
          Announcements
        </h1>
      </div>
      <div>
        <Link href="/">
          <h1 className="font-bold text-right">View all</h1>
        </Link>
      </div>

      <div dir="ltr" className="px-6">
        <div className="flex overflow-x-auto scroll-ps-6 snap-x snap-mandatory gap-6">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
              dateTime={item.dateTime}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
