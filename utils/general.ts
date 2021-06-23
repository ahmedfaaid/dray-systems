type SubscriberData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
};

function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

export function validateData(data: SubscriberData) {
  let checked = {
    error: false,
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  };
  const { firstName, lastName, email, company } = data;

  if (!firstName) {
    checked = {
      ...checked,
      error: true,
      firstName: 'Please enter a first name'
    };
  }

  if (!lastName) {
    checked = {
      ...checked,
      error: true,
      lastName: 'Please enter a last name'
    };
  }

  if (!email || !validateEmail(email)) {
    checked = {
      ...checked,
      error: true,
      email: 'Please enter a valid email address'
    };
  }

  if (!company) {
    checked = {
      ...checked,
      error: true,
      company: 'Please enter a company name'
    };
  }

  return checked;
}
