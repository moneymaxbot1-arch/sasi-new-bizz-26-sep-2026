import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
      >
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="terms-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Terms & Conditions (T&C)
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  Legal Agreement
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Bizz2u Official Terms of Use & Policies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Terms and Conditions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Window Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
          
          {/* Introductory Notice */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <p className="font-medium text-slate-200">
              By using this site and when purchasing a product or service through this website, you acknowledged that you have read and agreed to the following terms of use and our Refund Policy as well as the specific terms of use about the deal that you are purchasing. We reserve the right to amend these terms from time to time.
            </p>
          </div>

          {/* Payments */}
          <section className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Payments
            </h4>
            <p className="text-slate-300">
              You represent and warrant that if you are purchasing something from us that (i) any credit information you supply is true and complete, (ii) charges incurred by you will be honored by your credit card company, and (iii) you will pay the charges incurred by you at the posted prices, including any applicable taxes.
            </p>
          </section>

          {/* Liability */}
          <section className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Liability
            </h4>
            <p className="text-slate-300">
              We do not take any responsibility, and we are not liable for any damage caused through use of products or services purchased through this website, be it indirect, special, incidental or consequential damages (including but not limited to damages for loss of business, loss of profits, interruption or the like). If you have any questions regarding the terms of use outlined here, please do not hesitate to contact us.
            </p>
          </section>

          {/* Purchasing from Our Site */}
          <section className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Purchasing from Our Site
            </h4>
            <p className="text-slate-300">
              We bring some amazing products to our customers. We are sure you will like them and hope there won’t be any refund issues. We appreciate your understanding and cooperation.
            </p>
            <p className="text-slate-300">
              We offer a 30-day money back guarantee. If you face any technical issues in the product you can let us know, we will try our best to resolve it or you can also drop a mail at{' '}
              <a href="mailto:Bizzusupport@gmail.com" className="text-emerald-400 hover:underline font-mono font-medium">
                Bizzusupport@gmail.com
              </a>.
            </p>
            <p className="text-slate-300">
              If you are not 100% satisfied with the deal you purchased, please contact us within 30 DAYS of purchase for a full refund (unless specified on the deal itself) and the refund will be issued within a few days.
            </p>
            <p className="text-slate-300">
              If a product is discontinued within 12 months of purchase date then prime members get 100% wallet credits and non prime members get 50% wallet credits.
            </p>
          </section>

          {/* Dispute Policy */}
          <section className="space-y-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
            <h4 className="text-sm sm:text-base font-bold text-rose-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              Dispute Policy
            </h4>
            <p className="text-slate-300">
              Initiating a payment dispute or chargeback without first contacting our support team constitutes a violation of our Terms. In such cases, we reserve the right to terminate the user’s account immediately and without prior notice. Such users will be permanently banned from accessing our platform and any of its services in the future.
            </p>
          </section>

          {/* Delivery */}
          <section className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Delivery
            </h4>
            <p className="text-slate-300">
              After we have successfully received your payment, your product information will be emailed to the email address you provided. This may take up to 24 hours but usually, happens within minutes. Please ensure first you have checked your spam folder. If you do not receive an email after this time period, please contact us. Upon logging in with the provided credentials, you will have instant access to all our product and the support forum. Also, in order to improve the customer satisfaction level, we will be sending you timely survey/feedback emails. All the emails will be CAN-SPAM compliant. Meaning, you will be free to unsubscribe from our mailing list at any moment.
            </p>
          </section>

          {/* Website Terms of Use */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              Website Terms of Use
            </h4>

            <div className="space-y-1.5">
              <h5 className="font-semibold text-slate-200">Overview</h5>
              <p className="text-slate-300">
                By using the Web Site (other than to read this page for the first time), you agree to comply with all of the Terms of Use set forth herein. The right to use the Web Site is personal to you and is not transferable to any other person or entity.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-semibold text-slate-200">Children’s Issues</h5>
              <p className="text-slate-300">
                The Website is not directed to people under eighteen (18) years of age. If you are under 18, you must not use the website or services offered on it or to submit any individually identifiable information about yourself.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-semibold text-slate-200">Items included in the products</h5>
              <p className="text-slate-300">
                Please note that images and fonts that are present either in products or their presentations are not distributed along with the products and need to be downloaded from a third party. In case the author doesn’t include download links for the fonts used, please contact us. In case of images, most of the times the images shown in the presentations are premium images for which authors have right to use in those presentations and not to distribute them.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-semibold text-slate-200">Copyright</h5>
              <p className="text-slate-300">
                All materials contained on the Web Site are Copyright 2018, Bizz2u. All rights reserved. No person is authorized to use, copy or distribute any portion the Web Site including related graphics. Bizz2u and other trademarks and/or service marks (including logos and designs) found on the Web Site are trademarks/service marks that identify Bizz2u and the goods and/or services provided by Bizz2u. Such marks may not be used under any circumstances without the prior written authorization of Bizz2u.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-semibold text-slate-200">Information protection</h5>
              <p className="text-slate-300">
                We use the highest security standard available to protect your personally identifiable information while it is in transit to us. All data stored on our servers is protected by a secure “firewall” so that no unauthorized use or activity can take place. Although we will make every effort to safeguard your personal information from loss, misuse or alteration by third parties, you should be aware that there is always some risk that thieves may find a way to thwart our security system or that transmissions over the Internet will be intercepted.
              </p>
            </div>
          </div>

          {/* Limited 30-Day Conditional Guarantee */}
          <section className="space-y-2 pt-4 border-t border-slate-800">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Limited 30-Day Conditional Guarantee:
            </h4>
            <p className="text-slate-300">
              Refunds are contingent upon strict proof of full deployment. To be eligible, the Client must: (a) complete 100% of standard onboarding within seven (7) calendar days of purchase; (b) complete at least one documented onboarding review with a company technical specialist; (c) demonstrate continuous system usage by generating at least verifiable pipeline actions logged in the system audit trail; and (d) submit written notice of claim strictly between Day 28 and Day 30 post-purchase. Failure to meet any individual prerequisite constitutes a full waiver of the guarantee. Third-party licensing costs, setup fees, and custom development fees are strictly non-refundable under all circumstances.
            </p>
            <p className="text-slate-300">
              All sales and subscription fees are strictly non-refundable upon payment. Because the Company provides access to live software demonstrations and/or a trial evaluation period prior to purchase, the Client acknowledges and agrees that it has had sufficient opportunity to evaluate the software’s functionality and suitability for its business needs. Continued access constitutes full and final acceptance of the software "as is."
            </p>
          </section>

          {/* Sole Remedy for Non-Performance */}
          <section className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Sole Remedy for Non-Performance:
            </h4>
            <p className="text-slate-300">
              The Client acknowledges that sales outcomes depend on external market conditions, client execution, and third-party factors beyond the Company’s control; therefore, no warranties regarding sales volume, revenue growth, or specific financial results are made. In the event of documented software defects or technical non-performance, the Client’s sole and exclusive remedy shall be for the Company to use commercially reasonable efforts to correct the verified defect, or, at the Company’s sole discretion, provide a pro-rated service credit toward future billing cycles.
            </p>
          </section>

          {/* Key Risks of Excessively Restrictive Language */}
          <section className="space-y-2.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              Key Risks of Excessively Restrictive Language
            </h4>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>
                <strong className="text-slate-200">Payment Processor Penalties:</strong> Visa, Mastercard, and processors like Stripe evaluate dispute ratios strictly. If customers perceive a guarantee as an unclaimable trick, they bypass customer support and file an unauthorized charge or "services not as described" dispute. Exceeding dispute thresholds (typically around 0.9% to 1%) often results in frozen funds, mandatory reserves, or termination of processing privileges.
              </li>
              <li>
                <strong className="text-slate-200">Regulatory Enforcement:</strong> Regulatory bodies (e.g., the FTC in the US, ACCC in Australia, or trading standards authorities in the UK and EU) penalize "illusory promises." Advertising a risk-free guarantee while writing terms that make it practically impossible to execute is frequently classified as an unfair or deceptive trade practice.
              </li>
            </ul>
          </section>

        </div>

        {/* Modal Window Footer */}
        <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Official Bizz2u Policy Document
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
