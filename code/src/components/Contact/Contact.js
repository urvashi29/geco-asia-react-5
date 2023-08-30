import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  // navigate to Home page after 2 seconds automatically
  setTimeout(() => {
    navigate("/home");
  }, 2000);

  const [contact_info, setContactInfo] = useState({
    contact_number: 99999999,
    email: "admin@gmail.com",
    address: {
      street: 201,
      country: "USA",
    },
  });

  return (
    <div style={{ textAlign: "center" }}>
      Contact Us:
      <p>Contact: {contact_info.contact_number}</p>
      <p>Email: {contact_info.email}</p>
      <p>
        Adress: {contact_info.address.street} {contact_info.address.country}
      </p>
    </div>
  );
};

export default Contact;

// 1000 ms = 1 sec
