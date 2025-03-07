import React from "react";
import Text from "@/components/ui/Text";

const Terms = () => {
  return (
    <div className="overflow-hidden font-normal">
      <div className=" mx-auto w-full max-w-[1230px] pt-[50px] pb-[100px] px-4 text-[#ececec]">
        <Text className="text-center text-[#e3c565]">
          <strong>Last Updated: February 17, 2024</strong>
        </Text>

        <Text as="h3" className="mt-6 text-[22px]">
          Introduction
        </Text>
        <Text className="mt-2">
          This document governs the relationship between the Client and
          InnovativeMojo (The Company). Scope of Work <br />
          <br />
          The specific services to be provided will be outlined in each
          individual client contract. Ownership <br />
          <br />
          All funnels, graphics, and builds created during the project will
          remain the property of the Client. Portfolio Use <br />
          <br />
          The Company retains the right to use any created funnels, graphics,
          and builds in its portfolio, marketing materials, and case studies
          unless a Non-Disclosure Agreement (NDA) has been signed by the Client
          that explicitly restricts this use.
        </Text>

        <Text as="h2" className="mt-6 text-[28px]">
          What personal data we collect and why we collect it
        </Text>

        <Text as="h3" className="mt-6 text-[22px]">
          Payments
        </Text>
        <Text className="mt-2">
          Terms around deposits, payment plans, and cancellations will be
          specified in the individual client contract.
        </Text>

        {/* Duplicate Account block if needed */}
        <Text as="h3" className="mt-6 text-[22px]">
          Dispute Resolution
        </Text>
        <Text className="mt-2">
          Any disputes arising out of this agreement shall be resolved through
          mutual discussion, failing which legal avenues may be explored.
        </Text>

        <Text as="h3" className="mt-6 text-[22px]">
          Termination
        </Text>
        <Text className="mt-2">
          Either party may terminate the contract under conditions outlined in
          the individual client contract. Legal Jurisdiction
          <br />
          <br />
          This agreement shall be governed by the laws of the State of
          California.
        </Text>
      </div>
    </div>
  );
};

export default Terms;
