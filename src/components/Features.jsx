import { useState } from "react";
import FeatureBox from "./FeatureBox";

function Features() {
  const [items] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: "icon-any-file.svg",
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
