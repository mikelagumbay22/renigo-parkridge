import Image from "next/image";

export default function Facilities() {
  return (
    <main>
      <div>
        <h1 className="font-extrabold text-3xl pt-7 text-left">Facilities</h1>
      </div>
      <div>
        <p>
          Effortlessly view and reserve available facilities with a seamless
          booking experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <div>
          <Image
            src="https://img.freepik.com/premium-photo/basketball-sport-arena-empty-indoor-basketball-court-horizontal-panoramic-wallpaper-with-copy-space-generative-ai_262708-8503.jpg"
            alt="Basketball"
            width={300}
            height={200}
            className="object-cover"
          />
          <p className="text-center p-3">Basketball Court</p>
        </div>
        <div>
          <Image
            src="https://t4.ftcdn.net/jpg/09/88/83/89/360_F_988838909_jdITohH019DL3L7l2bG2qGDLWPCAXN7Z.jpg"
            alt="Tennis Court"
            width={300}
            height={200}
            className="object-cover "
          />
          <p className="text-center p-3">Tennis Court</p>
        </div>
        <div>
          <Image
            src="https://wallpapers.com/images/hd/swimming-pool-swimmer-kc5m6emwpnoej3zc.jpg"
            alt="Swimming Pool"
            width={300}
            height={200}
            className="object-cover"
          />
          <p className="text-center p-3">Swimming Pool</p>
        </div>
        <div>
          <Image
            src="https://media.istockphoto.com/id/178739543/photo/banquet-hall-restaurant.jpg?s=612x612&w=0&k=20&c=Ze5HUqoWRKpVAnG5JqxZ-O92-16_42jZbujUrU2TK7U="
            alt="Hall 1"
            width={300}
            height={200}
            className="object-cover"
          />
          <p className="text-center p-3">Hall 1</p>
        </div>
      </div>
    </main>
  );
}
