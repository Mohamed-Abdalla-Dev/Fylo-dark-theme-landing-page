import { useState } from "react";
import FeatureBox from "./FeatureBox";
import iconAccessAnywhere from "./assets/images/icon-access-anywhere.svg";
import iconSecurity from "./assets/images/icon-security.svg";
import iconCollaboration from "./assets/images/icon-collaboration.svg";
import iconAnyFile from "./assets/images/icon-any-file.svg";

function Features() {
  const [items] = useState([
    {
      icon: iconAccessAnywhere,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: iconCollaboration,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: iconAnyFile,
      title: "Store any type of file ",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. ",
    },
  ]);
  return (
    <section className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 items-center">
        {items.map((item, index) => (
          <FeatureBox key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
