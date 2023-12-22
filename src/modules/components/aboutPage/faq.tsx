import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      value: "item-1",
      trigger: "How does this platform work?",
      content:
        "Donors can browse through a list of beneficiary entities, each with a detailed profile outlining their mission, programs, and impact. Donors can view their bank details and make direct transfers or make donations through card payments to the beneficiary entities of their choice through the platform.",
    },
    {
      value: "item-2",
      trigger: "What are the fees associated with using this platform?",
      content:
        "We are committed to providing a free and accessible platform for all. There are no fees associated with creating an account or making donations.",
    },
    {
      value: "item-3",
      trigger:
        "How does the vetting process ensure the credibility of organizations and fundraisers on your platform?",
      content:
        "Our vetting process involves a multi-step evaluation, including assessing mission alignment, verifying provided information, conducting background checks, site visits (if applicable), and reviewing the organization's legal status, financial records and reputation. This thorough process ensures that only credible and trustworthy organizations and fundraisers are showcased on our platform, aligning with our commitment to transparency and accountability.",
    },
    {
      value: "item-4",
      trigger: "What types of organizations can register on your platform?",
      content:
        "We welcome various types of entities committed to charitable causes, including registered NGOs, community-based organizations, educational institutions, religious groups, orphanages, and small initiatives with a clear philanthropic goal. Our platform strives to accommodate a diverse range of causes and initiatives that benefit communities or individuals in need.",
    },
    {
      value: "item-5",
      trigger:
        "How are donations processed, and how does the platform ensure secure transactions?",
      content:
        "Donations on our platform are processed securely through trusted payment gateways. Refer to our How It Works page for details.",
    },
    {
      value: "item-6",
      trigger:
        "How long does it take for a fundraiser or organization to get approved after submission?",
      content:
        "Our team aims to review submissions promptly. Typically, the verification process takes less than a week at least, allowing us to assess the submitted information and documents thoroughly. However, timelines may vary based on the volume of submissions and the complexity of the vetting process.",
    },
    {
      value: "item-7",
      trigger: "Can I donate to multiple beneficiaries at once?",
      content:
        "Yes, you can make multiple donations simultaneously. Simply go to the beneficiaries page, click checkbox on beneficiaries you wish to support and enter the desired donation amount.",
    },
    {
      value: "item-8",
      trigger: "Can I set up recurring donations?",
      content:
        "No you can’t set up custom recurring donations but Give Aid creates donation plans like Ramadan and Friday Givings you can option. These plans only appear on our homepage on days the donations are made e.g. Friday Givings on Fridays. This allows you to make a consistent impact without having to manage individual transactions frequently. You can unsubscribe at any time on your dashboard",
    },
  ];
  return (
    <div className="container mt-20" id="faq">
      <h4 className="text-sky-950 text-[22px] md:text-[26px] text-center mb-4">
        Frequently Asked Questions
      </h4>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} className="my-4 py-3 px-4 rounded border border-gray-300">
            <AccordionTrigger className="font-[500] md:text-[18px] text-center mb-2 flex justify-between w-full">
              <div className="w-[80%] text-left">{faq.trigger}</div>
            </AccordionTrigger>
            <AccordionContent className="md:text-[18px] md:font-[300]">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
