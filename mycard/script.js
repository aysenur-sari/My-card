const data = {
    name: "Aysenur Sari",
    phone: "055555555",
    website: "aysenur.com",
    adress: "yukari kumbet",
    picture:
      "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144852014.jpg",
    socialMedia: [
      {
        platform: "facebook",
        profileUrl: "https://facebook.com/aysenursari",
        icon:"images/facebook.png"
      },
      {
        platform: "linkedin",
        profileUrl: "https://linkedin.com/in/asariysenur-",
        icon:"images/linkedin.png"
      },
      {
        platform: "instagram",
        profileUrl: "https://instagram.com/aysenursri",
        icon:"images/iconeworld.png"
      },
    ],
  };

  let profilePhoto =
  document.querySelector('#profilePhoto').src="images/IMG_20200222_100050_863.jpg";

  const namee = document.querySelector(".name")
  namee.innerHTML=(data.name)

  const phone = document.querySelector(".phone")
  phone.innerHTML=(data.phone)

  const mail= document.querySelector(".mail")
  mail.innerHTML=(data.website)

  const workspace= document.querySelector(".workspace")
  workspace.innerHTML=("aysenursri.com")

  const adress= document.querySelector(".adress")
  adress.innerHTML=(data.adress)

  const ins = document.querySelector(".ins")
  ins.setAttribute("href","https://instagram.com/aysenursri")

  const face = document.querySelector(".face")
  face.setAttribute("href","https://facebook.com/aysenursari")

  const linkdn = document.querySelector(".linkdn")
  linkdn.setAttribute("href","https://linkedin.com/in/asariysenur-l")

  /*const youtb = document.querySelector(".youtb")
  youtb.setAttribute("href","https://www.youtube.com/")
  */





  //console.log(ins);
  

  // objekten çek datayı direk girme
  //map le
  //elementi seçip hrefi set et