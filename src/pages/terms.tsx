import React from "react";

type Props = {};

const TermsOfUse = (props: Props) => {
  return (
    <div className="container py-[2rem]">
      <h2 className="text-[32px] font-[500] text-sky-500 tracking-wide">
        Terms Of Use
      </h2>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Main services or features:
        </h3>
        <p>
          Our platform connects donors to a wide range of charitable causes that
          are onboarded with us, making sadaqah easier and more accessible.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          User responsibilities or acceptable use policies:
        </h3>
        <ul>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Compliance with Laws:</span> Users
            must comply with all local, national, and international laws and
            regulations while using our app.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Respectful Conduct:</span> Users are
            expected to maintain a respectful and courteous demeanor while
            interacting with others within the app. Any form of harassment,
            discrimination, or offensive behavior is strictly prohibited.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Data Privacy and Protection:
            </span>{" "}
            Users&apos; data will be collected, stored, and processed in compliance
            with our Privacy Policy. Users are responsible for the accuracy and
            legality of the information they provide and must not engage in any
            unauthorized data access or breaches.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Intellectual Property: </span> Users
            must respect intellectual property rights and refrain from
            infringing upon copyrights, trademarks, patents, or any proprietary
            information belonging to others.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Prohibited Activities: </span> Users
            must respect intellectual property rights and refrain from
            infringing upon copyrights, trademarks, patents, or any proprietary
            information belonging to others. Users are prohibited from engaging
            in spamming, scams, impersonation, distributing viruses/malware, or
            any other malicious activities.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Account Security: </span> Users are responsible for maintaining account security and reporting any unauthorized access or security concerns.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Reporting Concerns: </span> Users are
            encouraged to report violations, inappropriate content, or security
            vulnerabilities promptly.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Termination of User Accounts:{" "}
            </span>{" "}
            Give Aid reserves the right to terminate user accounts in cases of
            violation of terms, fraudulent activity, or any behavior that is
            deemed harmful or inappropriate. Users will be notified of account
            termination, and the reasons will be provided, except in cases where
            notification would compromise security or legal obligations.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Consequences of Violation:{" "}
            </span>{" "}
            Violation may result in account suspension, termination, or legal
            action.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Notice of Changes to Terms:{" "}
            </span>{" "}
            Users will be notified of any changes or updates to the Terms of
            Use.We reserve the right to update user responsibilities and
            acceptable use policies. Continued use of the app after such changes
            implies acceptance of the updated terms.
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          User agreement method:
        </h3>
        <p>By signing up</p>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Disclaimers or limitations of liability:
        </h3>
        <ul>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Liability for Damages:</span> Give Aid
            shall not be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from the use or inability
            to use the app. Users agree that Give Aid is not responsible for any
            loss of data, profits, or business interruption resulting from app
            usage.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Third-Party Services or Content:
            </span>{" "}
            Users acknowledge that the app may include links to third-party
            services, content, or products. Give Aid does not endorse or assume
            responsibility for any third-party content or services accessed
            through the app. Users utilize such services at their own risk.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              User Conduct and Donations:
            </span>{" "}
            Users are solely responsible for their conduct and decisions while
            using the app, especially concerning donations. Give Aid has vetted
            organizations and fundraisers featured on the app, but users are
            responsible for verifying the credibility of donation recipients
            before contributing.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Third-Party Payment System:{" "}
            </span>{" "}
            Give Aid utilizes Flutterwave as a third-party payment system for
            card donations within the app. Any issues arising from the use of
            Flutterwave&apos;s services are not the responsibility of Give Aid. Users
            agree that any disputes, problems, or concerns with Flutterwave&apos;s
            services will be addressed directly with Flutterwave.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Modification or Termination of Services:{" "}
            </span>{" "}
            Give Aid reserves the right to modify, suspend, or terminate app
            services or features without prior notice. Users agree that Give Aid
            is not liable for any loss or damage resulting from such actions.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Indemnification: </span> Users agree
            to indemnify and hold Give Aid harmless from any claims, damages, or
            losses arising from their use of the app or violation of terms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfUse;
