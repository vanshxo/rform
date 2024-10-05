"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import Label from "./Label";
import './RegistrationForm.css'
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
const formSchema = z.object({
  studentName: z.string().min(2, {
    message: "studentName must be at least 2 characters.",
  }),
  fatherName: z.string().min(2, {
    message: "fatherName must be at least 2 characters.",
  }),
  fatherNo: z
  .number()
  .min(1000000000, { message: "Father's contact number must be at least 10 digits." })
  .max(9999999999, { message: "Father's contact number must be at most 10 digits." }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  aadharNo: z
  .number()
  .min(100000000000, { message: "Aadhar number must be exactly 12 digits." })
  .max(999999999999, { message: "Aadhar number must be exactly 12 digits." }),
  class: z.string().min(1, {
    message: "class must be at least 1 characters.",
  }),
  section: z.string().min(1, {
    message: "section must be at least 1 characters.",
  }),
  contactNo: z
  .number()
  .min(1000000000, { message: "Contact number must be at least 10 digits." })
  .max(9999999999, { message: "Contact number must be at most 10 digits." }),
  pincode: z
    .number()
    .min(100000, { message: "Pincode must be exactly 6 digits." })
    .max(999999, { message: "Pincode must be exactly 6 digits." }),
  schoolName: z.string().min(2, {
    message: "schoolName must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),

})
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema), 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://sphinxbackend-env.eba-im8kcmv8.us-east-1.elasticbeanstalk.com/api/mtse/register", {
        
          "name":"Divyansh",
          "mobileNo":"9509333025",
          "email":"divyansh@gmail.com",
          "aadharNo":"123456789012",
          "grade":"A",
          "section":"A",
          "divison":"A",
          "schoolName":"ABC",
          "city":"Jaipur",
          "pincode":"302017",
          "fathersName":"Ajdhsjd",
          "fathersNo":"2398983893",
          "referenceID":"9384938499"
      
      });
    } catch (error) {
      
    }
}


  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to submit registration form");
  //     }

  //     const result = await response.json();
  //     console.log("Form submitted successfully:", result);

  //     setFormData({
  //       studentName: "",
  //       fatherName: "",
  //       fatherNo: "",
  //       email: "",
  //       aadharNo: "",
  //       class: "",
  //       section: "",
  //       contactNo: "",
  //       pincode: "",
  //       schoolName: "",
  //       city: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 p-4 bg-gray-50 rounded-md shadow-lg">
      <div>
        <Label>Student Name</Label>
        <Input
          type="text"
          
          {...register("studentName")}
          value={formData.studentName}
          onChange={handleChange}
          required label={""}
        />
                 {errors.studentName && <p className="text-red-500" style={{color:"red"}}>{String(errors.studentName.message)}</p>}
      </div>
      <div>
        <Label>Father's Name</Label>
        <Input
          type="text"
          {...register("fatherName")}
          value={formData.fatherName}
          onChange={handleChange}
          required label={""}
        />
         {errors.fatherName && <p className="text-red-500"  style={{color:"red"}}  style={{color:"red"}}>{String(errors.fatherName.message)}</p>}
      </div>
      <div>
        <Label>Father's Contact No</Label>
        <Input
          type="number"
          {...register("fatherNo",{
            valueAsNumber: true, 
          })}
          value={formData.fatherNo}
          onChange={handleChange}
          required label={""}
        />
        {errors.fatherNo && <p className="text-red-500"  style={{color:"red"}}>{String(errors.fatherNo.message)}</p>}
        
      </div>
      <div>
        <Label>Email ID</Label>
        <Input
          type="email"
          {...register("email")}
          value={formData.email}
          onChange={handleChange}
          required label={""}        />
            {errors.email && <p className="text-red-500"  style={{color:"red"}}>{String(errors.email.message)}</p>}
      </div>
      <div>
        <Label>Aadhar No</Label>
        <Input
          type="number"
          {...register("aadharNo",{
            valueAsNumber: true, 
          })}
          value={formData.aadharNo}
          onChange={handleChange}
          required label={""}
        />
        {errors.aadharNo && <p className="text-red-500"  style={{color:"red"}}>{String(errors.aadharNo.message)}</p>}
      </div>
      <div>
        <Label>Class</Label>
        <select
          {...register("class")}
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
          {...register("section")}
          value={formData.section}
          onChange={handleChange}
          required label={""}
        />
         {errors.section && <p className="text-red-500"  style={{color:"red"}}>{String(errors.section.message)}</p>}
      </div>
      <div>
        <Label>Contact No</Label>
        <Input
          type="number"
          {...register("contactNo",{
            valueAsNumber: true, 
          })}
          value={formData.contactNo}
          onChange={handleChange}
          required label={""}
        />
         {errors.contactNo && <p className="text-red-500"  style={{color:"red"}}>{String(errors.contactNo.message)}</p>}
      </div>
      <div>
        <Label>Pincode</Label>
        <Input
          type="number"
          {...register("pincode",{
            valueAsNumber: true, 
          })}
          value={formData.pincode}
          onChange={handleChange}
          required label={""}
          />
          {errors.pincode && <p className="text-red-500"  style={{color:"red"}}>{String(errors.pincode.message)}</p>}
      </div>
      <div>
        <Label>School Name</Label>
        <Input
          type="text"
          {...register("schoolName")}
          value={formData.schoolName}
          onChange={handleChange}
          required label={""}
          />
          {errors.schoolName && <p className="text-red-500"  style={{color:"red"}}>{String(errors.schoolName.message)}</p>}
      </div>
      <div>
        <Label>City</Label>
        <Input
          type="text"
          {...register("city")}
          value={formData.city}
          onChange={handleChange}
          required label={""}
          />
          {errors.city && <p className="text-red-500"  style={{color:"red"}}>{String(errors.city.message)}</p>}
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegistrationForm;


