"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LuHandshake } from "react-icons/lu";
import { MapPin, Phone } from "lucide-react";

import { useEffect, useState } from "react";
import { sendEmail } from "@/utils/emailServices";
import { client } from "@/sanity/lib/client";

export default function ContactPage() {

  const [res, setRes] = useState<{ mobile: string; address: string; hotline: string }[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "contactPage"] { mobile, address, hotline }
        `);
        setRes(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

 

const handleSubmit = async (e:React.FormEvent) => {
e.preventDefault();

const templateParams = {
  to_name: "Samreen Saif",
  from_name: name,
  from_email: email,
  subject: subject,
  message: message
}

try {
  await sendEmail(templateParams);
  alert('Email sent successfully');
  setName('');
  setEmail('');
  setSubject('');
  setMessage('');
} catch (error) {
  console.error('Failed to send email', error);
  alert('Failed to send email. Please try again.');
}

}
  return (
    <div className="min-h-screen pb-10 bg-purple-200">
     
      {/* Contact Form Section */}
      <section className="pt-[100px]">
        <div className="container mx-auto px-4">
        <h1
   
  className="text-6xl text-embossed text-center font-semibold text-[#7C4EE4]"
>
  Get In Touch With Us
</h1>

          <p className="text-gray-500 text-center max-w-2xl mx-auto mt-6 mb-12 md:mb-16">
          Have questions or feedback about our recipes, tips, or services? We would love to hear from you! Feel free to send us an email, and our dedicated team will be delighted to assist you. Don&apos;t hesitate—reach out to us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Address</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                  {res.length > 0 ? res[0].address : "Loading..."}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Mobile: {res.length > 0 ? res[0].mobile : "Loading..."}
                    <br />
                    Hotline: {res.length > 0 ? res[0].hotline : "Loading..."}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <LuHandshake className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Partner With Us!</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                  
                    Recipe Development
                    <br />
                    Sponsored Posts
                    <br/>
                    Food Photography
                    <br/>
                    Content Creation
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}

            <div className="p-4 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">

            <form className="md:col-span-2 space-y-6" onSubmit={handleSubmit} >
              <div>
                <label className="font-medium mb-2 block">Your name</label>
                <Input placeholder="Abc" name='name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="font-medium mb-2 block">Email address</label>
                <Input placeholder="Abc@def.com" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div>
                <label className="font-medium mb-2 block">Subject</label>
                <Input placeholder="This is optional" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}  />
              </div>
              <div>
                <label className="font-medium mb-2 block">Message</label>
                <Textarea placeholder="Hi! I'd like to ask about..." className="min-h-[120px]" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button className="w-full md:w-auto bg-[#7C4EE4] hover:bg-purple-400 hover:text-black ">
                Submit
              </Button>
            </form>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
