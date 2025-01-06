import seperator from "@/images/separatorBlack 2.png";
import backend from "@/images/maintenance--v3 1.png";
import design from "@/images/design.png";
import development from "@/images/development.png";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className=" mt-20 h-auto w-3/4">
        <div className="grid justify-center space-y-10 sm:grid-cols-2">
          <div className="col-span-2 justify-self-center border-l-2 border-r-2 border-black px-2 text-lg font-bold text-black">
            {" "}
            SKILLS
          </div>
          <Image
            src={seperator}
            alt=""
            className="col-span-2 justify-self-center"
          />
          <div className="col-span-2 flex flex-col justify-self-center sm:col-span-1">
            <div className="relative">
              <Image src={design} alt="" className="absolute" />
              <h3 className="relative ml-5 mt-5 text-lg font-bold text-black">
                Design
              </h3>
            </div>
            <p className=" w-52 text-black">
              I have a foundational understanding of database design principles
              and enjoy reading technical write ups.
            </p>
          </div>
          <div className="col-span-2 flex flex-col justify-self-center sm:col-span-1">
            <div className="relative">
              <Image src={development} alt="" className="absolute" />
              <h3 className="relative ml-5 mt-5 text-lg font-bold text-black">
                Development
              </h3>
            </div>
            <p className=" w-52 text-black">
              Experience building web applications from the ground up, handling
              both client-side interactivity and server-side logic.
            </p>
          </div>
          <div className="col-span-2 flex flex-col justify-self-center ">
            <div className="relative">
              <Image src={backend} alt="" className="absolute" />
              <h3 className="relative ml-5 mt-5 text-lg font-bold text-black">
                Deployment
              </h3>
            </div>
            <p className="mb-5  w-52 text-black">
              Deployed applications to both GCP and AWS using docker gaining
              experience in cloud based CI-CD deployment pipelines.
            </p>
          </div>
          <Image
            src={seperator}
            alt=""
            className="col-span-2  mt-12 justify-self-center"
          />
        </div>
      </div>
    </>
  );
}
