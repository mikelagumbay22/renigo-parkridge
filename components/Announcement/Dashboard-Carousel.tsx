import Image from "next/image";

// Define the type for the CarouselItem props
interface CarouselItemProps {
  title: string;
  imageSrc: string;
  dateTime: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ title, imageSrc, dateTime }) => (
  <div className="snap-center w-[213px] flex-shrink-0 flex flex-col items-center justify-center">
    <Image
      src={imageSrc}
      alt={title}
      width={213}
      height={325}
      className="rounded-lg object-cover"
    />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{dateTime}</p>
    </div>
  </div>
);

export default function Carousel() {
  const items = [
    {
      title: "Sample 1",
      imageSrc: "/images/sample1.jpg",
      dateTime: "2024-10-01 10:30 AM",
    },
    {
      title: "Sample 2",
      imageSrc: "/images/sample2.jpg",
      dateTime: "2024-10-01 11:45 AM",
    },
    {
      title: "Sample 3",
      imageSrc: "/images/sample3.jpg",
      dateTime: "2024-10-01 12:00 PM",
    },
    {
      title: "Sample 4",
      imageSrc: "/images/sample4.jpg",
      dateTime: "2024-10-02 09:15 AM",
    },
    {
      title: "Sample 5",
      imageSrc: "/images/sample5.jpg",
      dateTime: "2024-10-02 10:45 AM",
    },
    {
      title: "Sample 6",
      imageSrc: "/images/sample6.jpg",
      dateTime: "2024-10-03 01:00 PM",
    },
  ];

  return (
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
  );
}
