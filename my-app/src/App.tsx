import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface choose {
  image: string;
  title: string;
  description: string;
}

interface articles {
  image: string;
  author: string;
  title: string;
  description: string;
}

const chooseList: choose[] = [
  {
    image: "icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    image: "icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    image: "icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    image: "icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const articleList: articles[] = [
  {
    image: "image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: "image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: "image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
  },
  {
    image: "image-confetti.jpg",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white">
      <div className="overflow-hidden font-medium">
        <nav className="lg:px-32 flex items-center justify-between bg-white font-medium px-4 py-6 fixed shadow-md left-0 top-0 w-full z-50">
          <img src="logo.svg" alt="easybanking logo" />
          <ul className="lg:flex items-center gap-4 hidden text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <a href="" className="request-invite">
            Request Invite
          </a>
          <button onClick={toggleMenu} className="flex lg:hidden">
            <FaBars />
          </button>

          {isOpen && (
            <div className="p-4 rounded-xl shadow-lg bg-white absolute top-4 left-0 w-48 transition-all duration-300 ease-in-out">
  <ul className="grid gap-4">
    {["About Us", "Contact", "Blog", "Careers", "Support", "Privacy Policy"].map((item) => (
      <li
        key={item}
        className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-green-500"
      >
        {item}
      </li>
    ))}
  </ul>
</div>
          )}
        </nav>
        <div className="bg-neutral-50">
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-10 py-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8 lg:pl-32 font-medium text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-5xl text-gray-600">
                Next generation digital banking
              </h1>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <div className="flex justify-center lg:justify-start w-full">
                <a href="" className="request-invite block w-fit">
                  Request Invite
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full overflow-hidden bg-[url('bg-intro-desktop.svg')] bg-no-repeat bg-cover relative"
            >
              <img src="image-mockups.png " alt="" />
            </motion.div>
          </div>
        </div>
        <div className="lg:px-32 py-8 bg-neutral-100 px-4">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-normal text-center lg:text-left text-4xl text-gray-600"
            >
              Why choose Easybanking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before. Online
              Banking Our modern web and mobile applications allow you to keep
              track of your finances wherever you are in the world.
            </motion.p>
            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-center">
              {chooseList.map((choose, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  key={index}
                  className="grid gap-2 place-items-center lg:place-items-start"
                >
                  <img src={choose.image} className="size-14" alt="" />
                  <span className="text-lg lg:text-2xl text-gray-600">
                    {choose.title}
                  </span>
                  <p className="text-justify">{choose.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:px-32 py-8 bg-neutral-50 px-4">
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-normal text-center lg:text-left text-4xl text-gray-600"
            >
              Latest Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {articleList.map((article, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  key={index}
                  className="bg-white grid gap-2 font-normal shadow-md"
                >
                  <img src={article.image} className="w-full h-full" alt="" />
                  <div className="p-4 grid gap-1">
                    <span className="text-sm text-gray-600">
                      {article.author}
                    </span>
                    <span className="text-lg text-gray-600 font-medium cursor-pointer hover:text-green-400">
                      {article.title}
                    </span>
                    <p className="text-justify">{article.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-blue-950"
        >
          <div className="hidden lg:flex items-center justify-between lg:px-32 lg:py-16">
            <div className="flex justify-center lg:gap-16 items-center">
              <div className="grid lg:gap-12">
                <img src="logo.svg" alt="" />
                <div className="flex items-center gap-4">
                  <a
                    href=""
                    className="text-white cursor-pointer text-xl hover:text-green-400"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href=""
                    className="text-white cursor-pointer text-xl hover:text-green-400"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href=""
                    className="text-white cursor-pointer text-xl hover:text-green-400"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href=""
                    className="text-white cursor-pointer text-xl hover:text-green-400"
                  >
                    <FaPinterest />
                  </a>
                  <a
                    href=""
                    className="text-white cursor-pointer text-xl hover:text-green-400"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-center text-white">
                <ul className="space-y-2">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
                <ul className="space-y-2">
                  <li>Careers</li>
                  <li>Support</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="grid lg:gap-8">
              <a href="" className="request-invite w-fit">
                Request Invite
              </a>
              <span className="text-gray-400">
                &copy; Easybanking. All Rights Reserved
              </span>
            </div>
          </div>
          <div className="grid lg:hidden gap-6 place-items-center py-4">
            <img
              src="logo.svg"
              alt=""
              className="brightness-200 saturate-200 contrast-200 py-6"
            />
            <div className="flex items-center gap-4 text-2xl">
              <a
                href=""
                className="text-white cursor-pointer hover:text-green-400"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="text-white cursor-pointer hover:text-green-400"
              >
                <FaYoutube />
              </a>
              <a
                href=""
                className="text-white cursor-pointer hover:text-green-400"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="text-white cursor-pointer hover:text-green-400"
              >
                <FaPinterest />
              </a>
              <a
                href=""
                className="text-white cursor-pointer hover:text-green-400"
              >
                <FaInstagram />
              </a>
            </div>
            <ul className="grid gap-3 text-white text-xl text-center">
              <li className="hover:text-green-400">About Us</li>
              <li className="hover:text-green-400">Contact</li>
              <li className="hover:text-green-400">Blog</li>
              <li className="hover:text-green-400">Careers</li>
              <li className="hover:text-green-400">Support</li>
              <li className="hover:text-green-400">Privacy Policy</li>
            </ul>
            <a href="" className="request-invite block">
              Request Invite
            </a>
            <span className="text-gray-400 text-lg">
              &copy; Easybank. All Rights Reserved
            </span>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
