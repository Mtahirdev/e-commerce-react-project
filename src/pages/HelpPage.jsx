import React, { useState } from "react";
import {
  FiSearch,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiTruck,
  FiRotateCcw,
  FiCreditCard,
  FiUser,
  FiPackage,
  FiChevronDown,
} from "react-icons/fi";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import InsideBrand from "../components/InsideBrand";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

const topics = [
  {
    icon: <FiPackage />,
    title: "Orders",
    text: "Track, change or cancel an order",
  },
  { icon: <FiTruck />, title: "Shipping", text: "Delivery times and charges" },
  { icon: <FiRotateCcw />, title: "Returns", text: "Return and refund policy" },
  {
    icon: <FiCreditCard />,
    title: "Payments",
    text: "Payment methods and coupons",
  },
  { icon: <FiUser />, title: "Account", text: "Login, password and profile" },
  { icon: <FiMessageCircle />, title: "Sellers", text: "Selling on Shoppy" },
];

const faqs = [
  {
    q: "How can I track my order?",
    a: "Go to your orders page and open the order you want. You will see its current status and tracking details there.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 3 to 7 working days, depending on your city and the seller.",
  },
  {
    q: "How do I return a product?",
    a: "You can request a return within 7 days of delivery. The product must be unused and in its original packing.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept cash on delivery, debit and credit cards, and online bank transfer.",
  },
  {
    q: "How do I use a coupon code?",
    a: "Enter your code in the Coupon Code box on the cart page and press Apply. The discount shows in your order summary.",
  },
  {
    q: "How can I become a seller?",
    a: "Create a seller account on the seller site, add your shop details and start listing your products.",
  },
];

const contacts = [
  {
    icon: <FiMail />,
    title: "Email us",
    text: "support@shoppy.com",
    note: "Reply within 24 hours",
  },
  {
    icon: <FiPhone />,
    title: "Call us",
    text: "+92 300 0000000",
    note: "Mon - Sat, 9am - 6pm",
  },
  {
    icon: <FiMessageCircle />,
    title: "Live chat",
    text: "Chat with support",
    note: "Available 9am - 6pm",
  },
];

const HelpPage = () => {
  let [searchbar, setsearchbar] = useState(false);

  return (
    <div>
      <title>Help Page</title>
      {searchbar && (
        <div className="fixed inset-0 top-2 flex justify-center  w-screen  z-90 ">
          <SearchBar setsearchbar={setsearchbar}></SearchBar>
        </div>
      )}
      <Navbar setsearchbar={setsearchbar}></Navbar>

      <div className="w-full bg-ink-50 min-h-screen">
        {/* ================= Hero + search ================= */}
        <div className="w-full bg-linear-to-r from-ink-900 via-ink-700 to-ink-600 py-10 md:py-16 flex justify-center">
          <div className="w-[90%] max-w-3xl text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              How can we help you?
            </h1>
            <p className="text-white/80 mt-3 md:text-lg">
              Search our help center or pick a topic below.
            </p>

            <div className="mt-6 flex items-center bg-white rounded-xl overflow-hidden shadow shadow-black/30">
              <FiSearch className="text-2xl text-ink-800 ml-4" />
              <input
                type="text"
                placeholder="Search for help..."
                className="flex-1 min-w-0 px-3 py-3 md:py-4 outline-none text-sm md:text-base"
              />
              <button className="bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 md:px-8 py-3 md:py-4 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[95%] max-w-6xl py-10 md:py-14 flex flex-col gap-12 md:gap-16">
            {/* ================= Topics ================= */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-5">
                Browse by topic
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {topics.map((t) => (
                  <div
                    key={t.title}
                    className="bg-white rounded-lg shadow shadow-black/10 hover:shadow-lg transition p-4 md:p-6 cursor-pointer flex flex-col gap-2"
                  >
                    <div className="w-11 h-11 rounded-full bg-ink-100 text-ink-900 flex justify-center items-center text-xl">
                      {t.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-ink-900">
                      {t.title}
                    </h3>
                    <p className="text-sm text-ink-800">{t.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= FAQ ================= */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-5">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-white rounded-lg shadow shadow-black/10 p-4"
                  >
                    <summary className="flex justify-between items-center gap-4 cursor-pointer list-none font-semibold text-ink-900 md:text-lg">
                      {f.q}
                      <FiChevronDown className="shrink-0 text-xl transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm md:text-base text-ink-800 border-t border-ink-100 pt-3">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* ================= Contact cards ================= */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-5">
                Still need help?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {contacts.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-lg shadow shadow-black/10 p-5 flex flex-col items-center text-center gap-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex justify-center items-center text-xl mb-2">
                      {c.icon}
                    </div>
                    <h3 className="text-lg font-bold text-ink-900">
                      {c.title}
                    </h3>
                    <p className="font-semibold text-ink-900">{c.text}</p>
                    <p className="text-sm text-ink-800">{c.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= Contact form ================= */}
            <section className="bg-white rounded-lg shadow shadow-black/10 p-5 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
                Send us a message
              </h2>
              <p className="text-ink-800 mt-1 mb-5">
                Fill in the form and our team will get back to you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-ink-100 rounded-lg px-3 py-3 text-sm outline-none focus:border-brand-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-ink-100 rounded-lg px-3 py-3 text-sm outline-none focus:border-brand-500"
                />
                <input
                  type="text"
                  placeholder="Order number (optional)"
                  className="border border-ink-100 rounded-lg px-3 py-3 text-sm outline-none focus:border-brand-500"
                />
                <select className="border border-ink-100 rounded-lg px-3 py-3 text-sm outline-none focus:border-brand-500 bg-white">
                  <option>Select a topic</option>
                  <option>Orders</option>
                  <option>Shipping</option>
                  <option>Returns</option>
                  <option>Payments</option>
                  <option>Account</option>
                  <option>Other</option>
                </select>
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="md:col-span-2 border border-ink-100 rounded-lg px-3 py-3 text-sm outline-none focus:border-brand-500 resize-none"
                />
              </div>

              <button className="mt-5 w-full md:w-fit px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors">
                Send message
              </button>
            </section>
          </div>
        </div>
      </div>
      <div className="">
        <InsideBrand></InsideBrand>
        <Footer></Footer>
      </div>
      <FloatingButtons></FloatingButtons>
    </div>
  );
};

export default HelpPage;
