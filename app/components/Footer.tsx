export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base">DocRoute</h3>
            <p className="text-slate-400 leading-relaxed">
              Simplifying IRCC document preparation for Canadian immigration applicants worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#form" className="hover:text-blue-400 transition-colors">
                  Get Checklist
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-blue-400 transition-colors">
                  Download PDF
                </a>
              </li>
              <li>
                <a href="/checklist.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@docroute.app"
                  className="hover:text-blue-400 transition-colors"
                  rel="noopener noreferrer"
                >
                  hello.doc.route@gmail.com
                </a>
              </li>
              <li className="text-slate-500">
                Support hours: Mon-Fri 9AM-5PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} DocRoute. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
          <p>
            DocRoute is not a law firm and does not provide legal advice. 
            We are not affiliated with Immigration, Refugees and Citizenship Canada (IRCC) or the Government of Canada. 
            For legal immigration advice, please consult a licensed immigration consultant or lawyer.
          </p>
        </div>
      </div>
    </footer>
  );
}