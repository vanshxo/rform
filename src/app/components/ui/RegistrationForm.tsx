"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import './RegistrationForm.css'
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    fatherNo: "",
    email: "",
    aadharNo: "",
    class: "",
    section: "",
    contactNo: "",
    pincode: "",
    schoolName: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      setFormData({
        studentName: "",
        fatherName: "",
        fatherNo: "",
        email: "",
        aadharNo: "",
        class: "",
        section: "",
        contactNo: "",
        pincode: "",
        schoolName: "",
        city: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>

    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-8 bg-gray-50 rounded-md shadow-lg">
      <div>
        <Label>Student Name</Label>
        <Input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Father's Name</Label>
        <Input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Father's Contact No</Label>
        <Input
          type="text"
          name="fatherNo"
          value={formData.fatherNo}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Email ID</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required label={""}        />
      </div>
      <div>
        <Label>Aadhaar No</Label>
        <Input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Class</Label>
        <select
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Class</option>
          <option value="C">Class 6-8</option>
          <option value="D">Class 9-10</option>
          <option value="E">Class 11-12</option>
        </select>
      </div>
      <div>
        <Label>Section</Label>
        <Input
          type="text"
          name="section"
          value={formData.section}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Contact No</Label>
        <Input
          type="text"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Pincode</Label>
        <Input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>School Name</Label>
        <Input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>City</Label>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <Button type="submit" style={{letterSpacing:"5px"}}>Register</Button>
    </form>
    </>
  );
};

export default RegistrationForm;


