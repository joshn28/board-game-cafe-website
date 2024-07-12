import { Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import BubbleTeaAndCookies from "./BubbleTeaAndCookies";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-2 w-full h-[60vh] bg-[#DEE9D3]">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="flex flex-col gap-y-7">
            <h1 className="text-6xl font-bold">Sip & Play</h1>
            <p>
              Come on in with your friends and family and play boardgames from{" "}
              <br />
              our collection of over 500+ games! Play while enjoying bubble tea,{" "}
              <br />
              coffee, beer sandwiches or salads and have a great time!
            </p>
            <Button className="w-max font-bold border-black text-lg" variant="bordered">
              Make a Reservation
            </Button>
          </div>
        </div>
        <Canvas>
          <ambientLight />
          <BubbleTeaAndCookies />
        </Canvas>
      </section>
      <section className="w-full py-10 bg-[#F0F0F0]">
        <div className="flex flex-col justify-between items-center gap-y-3">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p>Prices per person for 3 hrs of gameplay:</p>
          <ul>
            <li>$10 on Mon - Thurs</li>
            <li>$12 on Friday - Sunday & Holidays</li>
            <li>$15 for reservation</li>
          </ul>
          <p>
            For large parties (9+ or more people), please email us at
            sipnplaynyc@gmail.com to inquire about a reservation.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
