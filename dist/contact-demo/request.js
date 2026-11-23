const form = document.querySelector('#demo-request');
const draft = document.querySelector('#draft');
const body = document.querySelector('#body');
const link = document.querySelector('#send-draft');

function updateEmailLink() {
  link.href = 'mailto:contact@onedatasoftware.com?subject=OneOps%20architecture%20session%20request&body=' + encodeURIComponent(body.value);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(form);
  body.value = [
    'Hello OneData team,', '',
    'I would like to arrange a 30-minute OneOps architecture session.', '',
    'Name: ' + values.get('fullName'), 'Business email: ' + values.get('email'),
    'Company: ' + values.get('company'), 'Role: ' + values.get('role'),
    'Monthly Bedrock spend: ' + values.get('spend'), 'Primary focus: ' + values.get('focus')
  ].join('\n');
  updateEmailLink();
  form.hidden = true;
  draft.hidden = false;
  draft.focus();
});
body.addEventListener('input', updateEmailLink);
document.querySelector('#edit').addEventListener('click', () => {
  draft.hidden = true;
  form.hidden = false;
  form.elements.fullName.focus();
});
