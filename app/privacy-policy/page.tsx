import Container from "@/components/globals/Container"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Privacy Policy | SD IT Solution Store',
  description: "Learn about SD IT Solution Store's Privacy Policy. Understand how we collect, use, and protect your personal information to ensure a secure shopping experience."
}



const PrivacyPolicyPage = () => {
  return (
    <Container className="text-content">
      <div className="py-20 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">Privacy Policy</h1>
      </div>

      <article className="text-gray-800 pb-20 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold">1. Data Controller and Representative</h3>

        <p>
          This Privacy Policy describes the privacy practices of SDITSolution&apos;s Sites and Products and anywhere we display or reference this policy. Through our Sites and Products, SDITSolution and its affiliated entities (collectively, &quot;SDITSolution&quot;, &quot;us,&quot; or &quot;we&quot;) implement the processing of information that can be used to identify you (&quot;Personal Data&quot;) listed below. SDITSolution is committed to protecting your Personal Data. We understand that the security of your Personal Data is important. We provide reasonable administrative, technical, and physical security controls to protect your Personal Data. We will only collect and use information from you as described in this Privacy Policy. We will not sell your data to any third parties without your expresee consent.
        </p>

        <p>Please read carefully the following privacy policy which provides you, as the User of the Sites and/or Products (the &quot;User&quot; or &quot;You&quot;), with the relevant information regarding the various processing of Personal Data implemented by SDITSolution.</p>

        <h3 className="font-semibold text-2xl">2. Personal Data Processing Implemented by SDITSolution</h3>

        <p>&quot;Personal Data&quot; means any information relating to an identified or identifiable natural person (&quot;data subject&quot;); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. Depending on how you interact with us, we process different kinds of data and in different ways. Some data is automatically processed if you visit our Sites or use our Products. Others data is only processed if you actively submit it to us (like using our web forms to get in touch with us or uploading content to our Sites).</p>


        <h4 className="font-semibold text-xl">2.1 Data we process if you visit our Sites:</h4>
        <p>SDITSolution does not collect any information when the user visits the site</p>

        
        <h4 className="font-semibold text-xl">2.2 Data we process only if you submit it to us:</h4>

        <h5>2.2.1 Personal Data we collect if you submit to us through the data collection form in the purchase process or other processes:</h5>

        <p>Transaction Data: Billing information, such as your name, email address, billing address, your contact number, Type of Product you purchase and Amount you pay in your currency</p>

        <h5>2.2.2 Purposes of Processing</h5>

        <p>We use Account Data to help you to create an account and keep a record of your product license (that is, authenticating and periodically verifying your licensing rights in the product for anti-piracy purposes) and to enable the provision of maintenance or support services to you. </p>

        <p>We will use Transaction Data to complete your order, for billing purposes, and for internal accounting and charge back management purpose.</p>

        <p>We do not collect or process the data about your payment instruments such as credit card numbers, banking account numbers or Pay Pal accounts. This information is collected, processed and stored by our qualified payment processors.</p>

        <h3>3. Recipients of Your Personal Data</h3>
        <p>We treat your Personal Data with care and confidentially and will only pass it on to third parties to the extent described below and not beyond. We do not share, sell, rent, or trade Personal Data with third parties for their promotional purposes without your prior consent.</p>

        <h3>4. Cookies and tracking tools</h3>
        <p>SDITSolution does not use any cookies or tracking tools to track activity and interactions of the user with the site</p>


        <h3> 5. Revision of this Privacy Policy</h3>

        <p>Occasionally, we may change this privacy policy (or other documents related to privacy policy) to allow SDITSolution to use or share your Personal Data in a different way. If we do, the links to the policy on our Sites (which are generally found in the footer of the Sites) will indicate that the policy has been changed. For new Users, the change will become effective upon posting. For existing Users, if the change is significant, it will become effective 30 days after posting. We encourage you to periodically review the privacy policy for the latest information on our privacy practices.</p>

        <h3>6. Contacting SDITSolution</h3>

        <p>If the User needs to contact SDITSolution for any reason (including to exercise any of its rights in relation to data protection as set out above) please contact sditsolutionstore@gmail.com .</p>
      </article>
    </Container>
  )
}

export default PrivacyPolicyPage