

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Copyright © 2023 Feito por{" "}
          <a
            href="https://achillesdev.com.br/" // Substitua pelo link real, se houver
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Achilles_dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;