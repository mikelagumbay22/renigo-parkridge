import Image from "next/image";
import Link from "next/link";

// Define the type for the CarouselItem props
interface CarouselItemProps {
  title: string;
  imageSrc: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ title, imageSrc }) => (
  <div className="snap-center w-[213px] flex-shrink-0 flex flex-col items-center justify-center">
    <Image
      src={imageSrc}
      alt={title}
      width={200}
      height={100}
      className="rounded-lg object-cover"
      style={{ objectFit: "cover", width: "250px", height: "100px" }}
    />
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

export default function Facilities() {
  const items = [
    {
      title: "Basketball Court",
      imageSrc: "https://img.freepik.com/premium-photo/basketball-sport-arena-empty-indoor-basketball-court-horizontal-panoramic-wallpaper-with-copy-space-generative-ai_262708-8503.jpg",
    },
    {
      title: "Tennis Court",
      imageSrc: "https://t4.ftcdn.net/jpg/09/88/83/89/360_F_988838909_jdITohH019DL3L7l2bG2qGDLWPCAXN7Z.jpg",
    },
    {
      title: "Swimming Pool",
      imageSrc: "https://wallpapers.com/images/hd/swimming-pool-swimmer-kc5m6emwpnoej3zc.jpg",
    },
    {
      title: "Hall 1",
      imageSrc: "https://media.istockphoto.com/id/178739543/photo/banquet-hall-restaurant.jpg?s=612x612&w=0&k=20&c=Ze5HUqoWRKpVAnG5JqxZ-O92-16_42jZbujUrU2TK7U=",
    },
  ];

  return (
    <main>
      <div>
        <h1 className="font-extrabold text-3xl pt-7 text-left">Facilities</h1>
      </div>
      <div>
        <p className="pb-1">
          Effortlessly view and reserve available facilities with a seamless
          booking experience.
        </p>
      </div>

      <div dir="ltr" className="px-6 mt-4">
        <div className="flex overflow-x-auto scroll-ps-6 snap-x snap-mandatory gap-6 pb-9">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
