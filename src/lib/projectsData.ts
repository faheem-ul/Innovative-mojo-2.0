import { StaticImageData } from "next/image";

import test from "@/public/images/projects/iviry-display.png";
import iviryResult from "@/public/images/projects/iviry-result.png";
import bulldogdisplay from "@/public/images/projects/bulldogdisplay.png";
import bulldogResult from "@/public/images/projects/bulldogResult.png";
import bulldogtestimonial from "@/public/images/projects/bulldogtestimonial.png";
import foodiedisplay from "@/public/images/projects/foodiedisplay.png";
import foodieResult from "@/public/images/projects/foodieresults.png";
import foodietestimonial from "@/public/images/projects/foodietestimonila.png";

export interface Project {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  processDescription?: string;
  Results?: string[];
  ResultImage: StaticImageData;
  testimonialDescription: string;
  testimonioalImage?: StaticImageData;
  cardsContent?: { title: string; description: string }[];
}

export const projectsData: Record<string, Project> = {
  tactiq: {
    id: "tactiq",
    title: "TactIQ Website",
    image: test,
    ResultImage: iviryResult,
    description: "TactIQ is an AI-powered tool for live transcriptions.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  foundation1890: {
    id: "foundation1890",
    title: "1890 Foundation",
    image: test,
    ResultImage: iviryResult,
    description: "A foundation supporting 1890 land-grant universities.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  tennessee: {
    id: "tennessee",
    title: "Tennessee State University",
    image: test,
    ResultImage: iviryResult,
    description: "Tennessee State University official website project.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  bulldog: {
    id: "bulldog",
    title: "Bulldogs-Estates",
    image: bulldogdisplay,
    ResultImage: bulldogResult,
    description:
      "Bulldogs-estates.com specializes in selling tailgating lots. They originally had a website, but it failed to drive any meaningful traffic or meet their specific needs. That's when they decided to approach Innovative MOJO for a full-scale digital transformation.",

    processDescription:
      "We built a brand-new website from scratch. Our team started with market research and user experience design. We then developed an interactive map feature using React to display available lots, integrated a digital contract-signing mechanism, and incorporated a secure payment gateway.",
    cardsContent: [
      {
        title: "Market Research",
        description:
          "Conducted comprehensive market research to identify client needs and market gaps.",
      },
      {
        title: "UX Design",
        description:
          "Initiated user experience design, focusing on usability and customer satisfaction.",
      },
      {
        title: "Development Phase",
        description:
          "Utilized React for developing an interactive map to display available lots.",
      },
      {
        title: "Contract Signing",
        description:
          "Integrated a digital contract-signing mechanism to streamline the booking process.",
      },
      {
        title: "Payment Gateway",
        description:
          "Incorporated a secure payment system to facilitate smooth transactions.",
      },
    ],

    Results: [
      "Revenue: $500k in 2 months",
      "Revenue in 2 years 1.76M",
      "User Engagement: Increased by 60%",
      "Conversion Rate: Up by 25%",
      "Sold 22 lots",
    ],
    testimonioalImage: bulldogtestimonial,
    testimonialDescription:
      "Innovative MOJO not only are diverse but responsive and reliable.",
  },
  bulkbrothers: {
    id: "bulkbrothers",
    title: "Bulk Brothers",
    image: test,
    ResultImage: iviryResult,
    description: "Bulk Brothers is a wholesale food supplier.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  eee: {
    id: "eee",
    title: "EEE",
    image: test,
    ResultImage: iviryResult,
    description: "EEE is a renewable energy initiative.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  selectheal: {
    id: "selectheal",
    title: "Select Healing",
    image: test,
    ResultImage: iviryResult,
    description: "Select Healing is a mental health therapy platform.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  davidbacksmith: {
    id: "davidbacksmith",
    title: "David Starbuck Smith",
    image: test,
    ResultImage: iviryResult,
    description: "David Starbuck Smith is a personal branding project.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  iviry: {
    id: "iviry",
    title: "Iviry",
    image: test,
    description:
      "Iviry is a tech-focused company that developed software for IT specialists, designed to help them manage and maintain IT services for their clients. While the software was sophisticated and functional, Iviry faced challenges in distributing it to a wider audience.",
    processDescription:
      "Innovative MOJO partnered with Iviry to understand software capabilities and target audience and undertook the following steps to meet Iviry's needs:",
    cardsContent: [
      {
        title: "Market Research",
        description:
          "Conducted comprehensive market research to identify client needs and market gaps.",
      },
      {
        title: "UX Design",
        description:
          "Initiated user experience design, focusing on usability and customer satisfaction.",
      },
      {
        title: "Development Phase",
        description:
          "Utilized React for developing an interactive map to display available lots.",
      },
      {
        title: "Contract Signing",
        description:
          "Integrated a digital contract-signing mechanism to streamline the booking process.",
      },
      {
        title: "Payment Gateway",
        description:
          "Incorporated a secure payment system to facilitate smooth transactions.",
      },
    ],
    Results: [
      "Significantly increased user engagement and downloads.",
      "Enabled Iviry to break into new markets, expanding its customer base.",
      "Improved to first page for Google Searches.",
    ],
    ResultImage: iviryResult,
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
  foodie: {
    id: "foodie",
    title: "Foodie Not a Chef",
    image: foodiedisplay,
    ResultImage: foodieResult,
    description:
      "Tiffany is a culinary enthusiast who had a strong Instagram following but lacked a dedicated platform to comprehensively showcase her recipes and generate revenue. She sought out Innovative MOJO to build her online brand, drive more attention, and create additional streams of income.",
    processDescription:
      "Innovative MOJO undertook the following steps to meet Tiffany's needs: Conducted an in-depth analysis to understand the target audience and their engagement with culinary content.",
    cardsContent: [
      {
        title: "Design",
        description:
          "Designed a user-friendly website focusing on optimal user experience and ease of navigation",
      },
      {
        title: "Blog Creation",
        description:
          "Added a blog section dedicated to Tiffany's diverse recipes and culinary tips.",
      },
      {
        title: "Receipe Format",
        description:
          "Developed a structured, simplified recipe format to facilitate user engagement.",
      },
      {
        title: "Revenue Enhancement",
        description:
          "Incorporated referral and sponsored content options to generate additional revenue streams.",
      },
      {
        title: "Meeting Objectives",
        description:
          "By focusing on these key areas, Innovative MOJO created a comprehensive online platform that effectively met Tiffany's objectives.",
      },
    ],

    Results: [
      "The new website had an immediate impact:",
      "Gained 3 new sponsors within 4 months.",
      "Enhanced brand awareness",
      "Extended reach beyond her Instagram audience.",
    ],
    testimonioalImage: foodietestimonial,
    testimonialDescription:
      "Tiffany's collaboration with Innovative MOJO has not only given her a new platform to express her culinary creativity but also significantly contributed to her brand's financial growth.",
  },
};
