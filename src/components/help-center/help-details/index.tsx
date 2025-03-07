import React from "react";
import Text from "@/components/ui/Text";

const HelpDetails = () => {
  return (
    <div className=" w-full max-w-[1230px] mx-auto px-4 pt-[50px] pb-[100px] mob:pb-10 text-[#ececec]">
      <Text className="text-center text-[#e3c565]">
        <strong>Last Updated: February 17, 2024</strong>
      </Text>
      <Text as="h3" className="text-[23px] font-bold mb-2">
        Who we are
      </Text>
      <Text>
        Our website address is:{" "}
        <a
          href="https://innovativemojo.com"
          className="underline text-[#f1f4fa]"
        >
          https://innovativemojo.com
        </a>
        .
      </Text>

      {/* What personal data we collect and why we collect it */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        What personal data we collect and why we collect it
      </Text>

      {/* Comments */}
      <Text as="h3" className="text-[23px] font-bold mt-4 mb-2">
        Comments
      </Text>
      <Text>
        When visitors leave comments on the site we collect the data shown in
        the comments form, and also the visitor’s IP address and browser user
        agent string to help spam detection. An anonymized string created from
        your email address (also called a hash) may be provided to the Gravatar
        service to see if you are using it. The Gravatar service privacy policy
        is available here:{" "}
        <a
          href="https://automattic.com/privacy/"
          className="underline text-[#f1f4fa]"
        >
          https://automattic.com/privacy/
        </a>
        . After approval of your comment, your profile picture is visible to the
        public in the context of your comment.
      </Text>

      {/* Media */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Media
      </Text>
      <Text>
        If you upload images to the website, you should avoid uploading images
        with embedded location data (EXIF GPS) included. Visitors to the website
        can download and extract any location data from images on the website.
      </Text>

      {/* Contact Forms */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Contact Forms
      </Text>

      {/* Cookies */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Cookies
      </Text>
      <Text>
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year.
      </Text>
      <Text>
        If you have an account and you log in to this site, we will set a
        temporary cookie to determine if your browser accepts cookies. This
        cookie contains no personal data and is discarded when you close your
        browser.
      </Text>
      <Text>
        When you log in, we will also set up several cookies to save your login
        information and your screen display choices. Login cookies last for two
        days, and screen options cookies last for a year. If you select
        “Remember Me”, your login will persist for two weeks. If you log out of
        your account, the login cookies will be removed.
      </Text>
      <Text>
        If you edit or publish an article, an additional cookie will be saved in
        your browser. This cookie includes no personal data and simply indicates
        the post ID of the article you just edited. It expires after 1 day.
      </Text>

      {/* Embedded content from other websites */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Embedded content from other websites
      </Text>
      <Text>
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website.
      </Text>
      <Text>
        These websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction with the embedded content
        if you have an account and are logged in to that website.
      </Text>

      {/* Analytics */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Analytics
      </Text>

      {/* Who we share your data with */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Who we share your data with
      </Text>

      {/* How long we retain your data */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        How long we retain your data
      </Text>
      <Text>
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </Text>
      <Text>
        For users that register on our website (if any), we also store the
        personal information they provide in their user profile. All users can
        see, edit, or delete their personal information at any time (except they
        cannot change their username). Website administrators can also see and
        edit that information.
      </Text>

      {/* What rights you have over your data */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        What rights you have over your data
      </Text>
      <Text>
        If you have an account on this site, or have left comments, you can
        request to receive an exported file of the personal data we hold about
        you, including any data you have provided to us. You can also request
        that we erase any personal data we hold about you. This does not include
        any data we are obliged to keep for administrative, legal, or security
        purposes.
      </Text>

      {/* Where we send your data */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Where we send your data
      </Text>
      <Text>
        Visitor comments may be checked through an automated spam detection
        service.
      </Text>

      {/* Your contact information */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Your contact information
      </Text>

      {/* Additional information */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Additional information
      </Text>

      {/* How we protect your data */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        How we protect your data
      </Text>

      {/* What data breach procedures we have in place */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        What data breach procedures we have in place
      </Text>

      {/* What third parties we receive data from */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        What third parties we receive data from
      </Text>

      {/* What automated decision making and/or profiling we do with user data */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        What automated decision making and/or profiling we do with user data
      </Text>

      {/* Industry regulatory disclosure requirements */}
      <Text as="h3" className="text-[23px] font-bold mt-6 mb-2">
        Industry regulatory disclosure requirements
      </Text>
    </div>
  );
};

export default HelpDetails;
