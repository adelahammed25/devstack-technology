import logo from "../assets/logo.png";

export function Footer() {
  return (
    <div className="border-t-2 mt-20">
      <footer className="footer sm:footer-horizontal text-black py-10 mx-auto container">
        <aside>
          <img src={logo} alt="" />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-2 pt-4 font-medium">
            <a className="link link-hover">Github</a>{" "}
            <a className="link link-hover">Twitter</a>{" "}
            <a className="link link-hover">Linkedin</a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-black opacity-100 font-semibold">
            PRODUCT
          </h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black opacity-100 font-semibold">
            COMPANY
          </h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black opacity-100 font-semibold">
            LEGAL
          </h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
      </footer>
      <div className="divider mx-auto container [--divider-color:#ddd]"></div>
      <div className="container flex justify-between text-gray-400 mx-auto pb-4">
        <div>
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
        <div>
          <a className="link link-hover mr-2">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
