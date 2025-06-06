import Image from "next/image";
import Link from "next/link";
import LogoIMG from '@images/LogoIMG.jpg';

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 pt-20 lg:pt-[100px]"
      style={{ backgroundColor: "var(--color-primary)" }}
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          {/* Column 1: Logo */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src={LogoIMG}
                  alt="logo"
                  width={100}
                  height={30}
                  className="max-w-full rounded-lg"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-[#fff]">
                Удобное приложение для поиска моек самообслуживания рядом с вами. Получайте кешбэк и экономьте на каждой мойке.
              </p>
            </div>
          </div>

          {/* Column 3: Features */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-[#fff]">Contact Us</h4>
              <ul>
                <li>
                  <div className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    info@yourdomain.com
                  </div>
                </li>
                <li>
                  <div className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    contact@yourdomain.com
                  </div>
                </li>
                <li>
                  <div className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    +999 999 9999
                  </div>
                </li>
                <li>
                  <div className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    mail to: contact@sales.com
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-[#fff]">About Us</h4>
              <ul>
                <li>
                  <Link href="/" className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="mb-3 inline-block text-base text-[#fff] hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <Link
                    href="/"
                    className="px-3 text-base text-[#fff] hover:text-[#fff] hover:underline"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/"
                    className="px-3 text-base text-[#fff] hover:text-[#fff] hover:underline"
                  >
                    Legal notice
                  </Link>
                  <Link
                    href="/"
                    className="px-3 text-base text-[#fff] hover:text-[#fff] hover:underline"
                  >
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
