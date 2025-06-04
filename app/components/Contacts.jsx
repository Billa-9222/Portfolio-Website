import Image from "next/image";
import telephone from "@/app/assets/icons/telephone.svg";
import email from "@/app/assets/icons/email.svg";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="container flex flex-col items-center mt-20 border border-t-white p-4 w-full"
    >
      <h2 className="text-4xl font-bold mb-4 text-white ">Contacts</h2>;
      <div className="text-white lg:flex gap-10 lg:gap-52 ">
        <div className="lg:flex gap-4 mb-6">
          <Image
            src={email}
            alt="email"
            width={24}
            height={24}
            className="invert"
          />
          <p>Vasilcamila806@gmail.com</p>
        </div>
        <div className="lg:flex gap-4">
          <Image
            src={telephone}
            alt="telephone"
            width={24}
            height={24}
            className="invert"
          />
          <p>98 999 71 77</p>
        </div>
      </div>
    </div>
  );
}
