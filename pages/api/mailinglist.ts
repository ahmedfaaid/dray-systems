const mailchimp = require('@mailchimp/mailchimp_marketing');
import { validateData } from '../../utils/general';

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_API_KEY,
  server: process.env.MAIL_CHIMP_SERVER_PREFIX
});

export default async (req, res) => {
  const { data } = JSON.parse(req.body);
  const validated = validateData(data);

  const listID = process.env.MAIL_CHIMP_LIST_ID;

  if (validated.error) {
    return res.status(400).json(validated);
  }

  try {
    const response = await mailchimp.lists.addListMember(listID, {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
        COMPANY: data.company
      }
    });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json(error.response.text);
  }
};
