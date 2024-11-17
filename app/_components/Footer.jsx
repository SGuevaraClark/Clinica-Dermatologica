import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50">
        <div className="container px-4 mx-auto py-10">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/4">
              <a href="/" className="block w-56 mb-5">
                <Image
                  src="/mainlogo.png"
                  alt="logo"
                  width={250}
                  height={150}
                />
              </a>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
                nobis excepturi. Accusantium non, voluptas similique obcaecati
                molestias perferendis, sint doloribus eaque dolor illo iure
                placeat hic laudantium fuga eveniet ipsum!
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-primary">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-primary">
                  Blog
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    Getting Started With HTML and CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    What Is Flex And When to Use It?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    How TailwindCSS Can Help Your Productivity?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    5 Tips to Make Responsive Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    See More
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-primary">
                  Connect With Us
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <Facebook size={35} className="text-primary border border-primary rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 hover:scale-125" />
                <Twitter size={35} className="text-primary border border-primary rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 hover:scale-125" />
                <Instagram size={35} className="text-primary border border-primary rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 hover:scale-125" />
                <Youtube size={35} className="text-primary border border-primary rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 hover:scale-125" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary py-4 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Copyright © 2024 - WaleedCodes. All Rights Reserved.
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Made with ❤️ by WaleedCodes
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
