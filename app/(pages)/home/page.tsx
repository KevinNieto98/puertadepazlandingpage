import { Carousel } from "@/components";
import { Horarios } from "@/components/organisms";

export default function Home() {
  return (
    <>
      <Carousel/>
      <div className="items-center justify-center w-screen">
          <div className=" bg-blue-500">
            <Horarios/>
          </div>
      </div>

    </>
  );
}
