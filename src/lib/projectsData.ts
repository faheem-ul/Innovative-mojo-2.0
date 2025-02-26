import { StaticImageData } from "next/image";

import test from "@/public/images/projects/iviry-display.png";
import iviryResult from "@/public/images/projects/iviry-result.png";
export interface Project {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  processDescription?: string;
  Results?: string[];
  ResultImage: StaticImageData;
  testimonialDescription: string;
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
    title: "Bulldog",
    image: test,
    ResultImage: iviryResult,
    description: "Bulldog is a fitness and nutrition brand.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
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
    title: "Foodie",
    image: test,
    ResultImage: iviryResult,
    description: "Foodie is a food delivery startup.",
    testimonialDescription:
      "Thanks to Innovative MOJO's expertise in market penetration, Iviry has successfully expanded its reach and can now assist more IT specialists in delivering top-notch service to their clients Competence from a business partner is a baseline expectation as you embark on a project together, and when distinguishable expertise upon execution of services is demonstrated the experience becomes that much more gratifying. <br /> <br />  Trust and accountability, however, cannot be fully quantified until each organization is fully engaged in the doing. On those fronts, Innovative MOJO, in the delivery of all the various services they provide to our organization, has no equal.  <br /> <br /> We could not possibly overstate the value they bring to our business, or the peace of mind associated with knowing they are in our corner. <br /> <br /> -Joseph Browne Iviry.com.",
  },
};
