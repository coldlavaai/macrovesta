import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-strong mt-32">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-white text-sm tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://eapconsult.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mv-accent-turquoise transition-colors duration-300"
                >
                  EAP Consult
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-mv-accent-turquoise transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-white text-sm tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-mv-accent-turquoise transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-white text-sm tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/documents/acceptable-use-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mv-accent-turquoise transition-colors duration-300"
                >
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/modern-slavery-statement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mv-accent-turquoise transition-colors duration-300"
                >
                  Modern Slavery Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/images/macrovesta-logo-white.webp"
              alt="Macrovesta Logo"
              width={229}
              height={80}
              className="w-auto h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {currentYear}{" "}
            <Link href="/" className="text-mv-accent-turquoise hover:underline">
              Macrovesta®
            </Link>{" "}
            All Rights Reserved. Macrovesta is a website owned and operated by
            Earlam & Partners Ltd.
          </p>
        </div>
      </Container>
    </footer>
  );
}
