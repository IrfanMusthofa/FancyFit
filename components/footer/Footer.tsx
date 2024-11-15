import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 size-full bg-primary-100 p-4 text-center md:h-[150px] md:py-4 md:text-start">
      <div className="flex-center my-4 gap-64">
        <div>
          <p className="text-white">
            This project is created to fulfill the assignment for the course
            II3140 Web and Mobile Application Development.
          </p>
        </div>

        <div>
          <p className="text-white">Irfan Musthofa - 18222056</p>
          <p className="text-white">Sistem dan Teknologi Informasi</p>
          <p className="text-white">Institut Teknologi Bandung</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
