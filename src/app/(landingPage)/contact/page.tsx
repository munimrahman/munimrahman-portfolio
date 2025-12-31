import ContactFormSection from "@/components/containers/Shared/ContactFormSection";
import PageHero from "@/components/containers/Shared/PageHero";

const ContactPage = () => {
  return (
    <div>
      <PageHero
        title="Contact"
        heading="Get in"
        headingWithColor="Contact"
        description="Have a question, an idea, or something you’d like to discuss? Send me a message and I’ll get back to you within 24 hours."
      />
      <ContactFormSection className="pt-20 lg:pt-24" />
    </div>
  );
};

export default ContactPage;
