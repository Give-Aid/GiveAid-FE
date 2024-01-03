import React from "react";

type Props = {};

const PrivacPolicy = (props: Props) => {
  return (
    <div className="container py-[2rem]">
      <h2 className="text-[32px] font-[500] text-sky-500 tracking-wide">
        Privacy Policy
      </h2>

      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Type of personal information collected:
        </h3>
        <ul>
          <li className="mb-2">
            {" "}
            <span className="font-medium">From users: </span> Name, email
            address for account creation.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              From organizations and fundraisers:{" "}
            </span>{" "}
            Detailed information used to create comprehensive profiles within
            the app, including mission statements, documents, logos, images,
            fundraising details, and bank account information.
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Methods of information collection:
        </h3>
        <p>Directly from users during signing and onboarding.</p>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Purposes of collected information:
        </h3>
        <ul>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Profile Creation:</span> To create and
            manage comprehensive profiles of organizations and fundraisers
            within the app.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Vetting and Verification:</span> To
            verify the credibility and authenticity of organizations and
            fundraisers participating in the platform.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">
              Fundraising Management and Communication:
            </span>{" "}
            To facilitate donation processes and communication between donors
            and causes.
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Sharing with third parties:
        </h3>
        <p>
          {" "}
          Details shared with Clerk for authentication, Flutterwave for donation
          processing, and limited information accessible to users within the
          app. Sensitive documents submitted by organizations are secured.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Measures to protect user information
        </h3>
        <ul>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Encryption Techniques: </span> Strong
            encryption techniques used to securely store sensitive data within
            backend databases.
          </li>
          <li className="mb-2">
            {" "}
            <span className="font-medium">Access Controls: </span> Access
            controls and restricted permissions implemented to ensure limited
            access to sensitive user information.
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Data Retention Period:
        </h3>
        <p>
          {" "}
          Personal information will be retained for as long as necessary to
          fulfill the purposes outlined in the Privacy Policy. Upon request or
          when no longer needed, personal data will be securely deleted or
          anonymized.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-[20px] font-[400] text-sky-500">
          Data Deletion Policy:
        </h3>
        <p>
          {" "}
          Users have the autonomy to delete their own accounts and associated
          data directly from their user profile settings. Upon clicking their
          avatar after logging in, users can access the account settings and
          initiate the account deletion process. Once the account deletion
          request is confirmed, Give Aid will promptly delete or anonymize the
          associated data, subject to any legal obligations or legitimate
          business interests that require data retention.
        </p>
      </div>
    </div>
  );
};

export default PrivacPolicy;
PrivacPolicy.title = "Give Aid: Privacy Policy";
PrivacPolicy.isAuthPage = false;
PrivacPolicy.ignoreLayout = false;