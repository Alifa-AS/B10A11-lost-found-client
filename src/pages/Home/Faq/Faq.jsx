import React from "react";

const Faq = () => {
  return (
    <div className="p-5 md:p-10 lg:p-16">
      {/* Heading */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-extrabold text-blue-400 drop-shadow-lg">
          Frequently Asked Question
        </h2>
        <p className="text-lg text-blue-300 opacity-80 py-2 ">Ask Any Question</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {/* Question 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How can I report a lost item?
          </div>
          <div className="collapse-content text-sm">
            Click on the "Report Lost Item" button and fill out the details
            including the item description, location, and date it was lost.
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I check if my lost item has been found?
          </div>
          <div className="collapse-content text-sm">
            Visit the "Found Items" section and search by keywords or category
            to check if someone has reported your lost item.
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is there a way to contact the person who found my item?
          </div>
          <div className="collapse-content text-sm">
            Yes! If someone reports an item as found, you can click on their
            report and use the "Contact Finder" option to send them a message.
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What happens if I falsely claim an item?
          </div>
          <div className="collapse-content text-sm">
            We take false claims seriously. If someone is found falsely claiming
            items, their account may be suspended or banned.
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I update or remove my lost item report?
          </div>
          <div className="collapse-content text-sm">
            Yes, go to "My Reports" section in your profile, where you can edit
            details or mark the item as found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
