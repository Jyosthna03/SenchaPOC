
Ext.define('SenchaPOC.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.Users',
    model: 'SenchaPOC.model.Users',
    storeId: 'Users',
    pageSize: 5,
    autoLoad: true,
    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'items',
        }
    },
   data: {
      'items': [
          {
              "templatetype": "Welcome",
              "emailsentto": "username@domain.com",
              "emailcc": "domain-specific@domain.tld",
              "senton": "May 20, 2024",
              "sentby": "contact@niti.gov.in",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Welcome",
              "emailsentto": "username@domain.com",
              "emailcc": "domain-specific@domain.tld",
              "senton": "May 20, 2024",
              "sentby": "contact@niti.gov.in",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "New documents email",
              "emailsentto": "firstname.role@domain.com",
              "emailcc": "domain-specific@domain.tld",
              "senton": "March 12, 2024",
              "sentby": "volunteer@redcross.org",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Account Activation",
              "emailsentto": "newuser123@startup.io",
              "emailcc": "support@startup.io",
              "senton": "April 3, 2024",
              "sentby": "admin@startup.io",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Password Reset",
              "emailsentto": "jane.doe@company.com",
              "emailcc": "security@company.com",
              "senton": "January 15, 2024",
              "sentby": "noreply@company.com",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
            "templatetype": "Welcome",
            "emailsentto": "username@domain.com",
            "emailcc": "domain-specific@domain.tld",
            "senton": "May 20, 2024",
            "sentby": "contact@niti.gov.in",
            "status": "Sent to Site",
            "actions": "View Email"
        },
          {
              "templatetype": "Newsletter",
              "emailsentto": "subscriber@newsnet.org",
              "emailcc": "info@newsnet.org",
              "senton": "February 28, 2024",
              "sentby": "editor@newsnet.org",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Survey Invitation",
              "emailsentto": "user.feedback@domain.org",
              "emailcc": "research@domain.org",
              "senton": "March 5, 2024",
              "sentby": "survey@domain.org",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Meeting Reminder",
              "emailsentto": "team.lead@projecthub.com",
              "emailcc": "calendar@projecthub.com",
              "senton": "April 7, 2024",
              "sentby": "events@projecthub.com",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Policy Update",
              "emailsentto": "compliance@enterprise.com",
              "emailcc": "legal@enterprise.com",
              "senton": "February 19, 2024",
              "sentby": "hr@enterprise.com",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Survey Invitation",
              "emailsentto": "user.feedback@domain.org",
              "emailcc": "research@domain.org",
              "senton": "March 5, 2024",
              "sentby": "survey@domain.org",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
              "templatetype": "Meeting Reminder",
              "emailsentto": "team.lead@projecthub.com",
              "emailcc": "calendar@projecthub.com",
              "senton": "April 7, 2024",
              "sentby": "events@projecthub.com",
              "status": "Sent to Site",
              "actions": "View Email"
          },
          {
            "templatetype": "Welcome",
            "emailsentto": "username@domain.com",
            "emailcc": "domain-specific@domain.tld",
            "senton": "May 20, 2024",
            "sentby": "contact@niti.gov.in",
            "status": "Sent to Email",
            "actions": "View Email"
        },
          {
              "templatetype": "Policy Update",
              "emailsentto": "compliance@enterprise.com",
              "emailcc": "legal@enterprise.com",
              "senton": "February 19, 2024",
              "sentby": "hr@enterprise.com",
              "status": "Email to Site",
              "actions": "View Email"
          }
      ]
  },
   
});

