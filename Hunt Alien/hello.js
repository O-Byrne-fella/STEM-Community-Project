(async () => {
  const { value: accept } = await Swal.fire({
    title: 'Terms and conditions',
    html:
      '<div>' +
      '<p>Please read the terms and conditions below:</p>' +
      '</div>',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder: 'I agree with the terms and conditions',
    confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'You need to agree with T&C';
    },
    footer: '<a href="file:///C:/Users/seany/OneDrive%20-%20Technological%20University%20Dublin/DT021%20yr3/STEM/Hunt%20Alien/STEM%20Outreach%20Project%20Description.pdf" target="_blank">View Terms and Conditions (PDF)</a>',
  });

  if (accept) {
    Swal.fire({
      title: 'You agreed with T&C :)',
      html: '<img src="C:\Users\seany\OneDrive - Technological University Dublin\DT021 yr3\STEM\Hunt Alien\8756025_AdobeExpress.gif" alt="Agreed GIF" style="width: 200px;">', // Replace with the URL of your GIF and adjust the width as needed
      confirmButtonText: 'OK',
    });
  }
})();
