import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p="20px" maxWidth="70%" margin="auto">
      <Heading as="h1" mb="20px">
        General Terms and Conditions
      </Heading>
      <Text fontSize="lg" mb="20px">
        These General Terms and Conditions of Stichting Webshop Keurmerk were drafted in consultation with the Consumentenbond [Consumer’s Association] in the context of the Self-regulation Coordination Group [Coördinatiegroep Zelfreguleringsoverleg CZ] of the Socioeconomic Council [Sociaal-ecomische Raad] and come into force on 1 June 2014.
      </Text>
      <Text fontSize="lg" mb="20px">
        1. These General Terms and Conditions will not be changed other than in consultation with the Consumentenbond (Consumers’ Association).
        2. Amendments to these Terms and Conditions are valid only after being published in the appropriate way, provided that in case of appropriate amendments, the provision that is most favourable for the Consumer shall prevail during the validity of an offer.
      </Text>
      <Text fontSize="lg">
        Address Stichting Webshop Keurmerk:
        Willemsparkweg 193, 1071 HA Amsterdam.
      </Text>
      <Text fontSize="lg" mt="20px">
        Appendix I: Standard form for withdrawal
      </Text>
      <Text fontSize="lg">
        Standard Form for Withdrawal
        (Complete this form and return it only when you want to revoke the agreement)
      </Text>
      <Text fontSize="lg">
        – To: WoodWatch
        Schiehavenkade 96, 3024EZ, Rotterdam, The Netherlands
        support@woodwatch.com
      </Text>
      <Text fontSize="lg">
        – I hereby inform you that I wish to revoke our agreement on the sale of the following products: [specification of the product]*
        the delivery of the following digital content [specification of the digital content]*
        the performance of the following service [specification of the service]*
      </Text>
      <Text fontSize="lg">
        – Ordered on*/received on* [date of ordering the services or receiving products]*
        – [Consumer’s name]
        – [Consumer’s address]
        – [Consumer’s signature] (only when this form is submitted on paper)
      </Text>
      <Text fontSize="lg" mb="20px">
        Delete and/or complete where appropriate.
      </Text>
      <Text fontSize="lg">
        Please send us an e-mail before return your product (support@Watchworldwatch.com)
      </Text>
    </Box>
  );
};

export default About;
