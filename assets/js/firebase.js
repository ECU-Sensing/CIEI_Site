// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-1kAUDHm2GAI-6C_ZDERXrqnzy7CdFN4",
  authDomain: "ciei-64781.firebaseapp.com",
  projectId: "ciei-64781",
  storageBucket: "ciei-64781.appspot.com",
  messagingSenderId: "960531290489",
  appId: "1:960531290489:web:cc1753326b1fca1de6b7a8",
  measurementId: "G-GG71WLZZT1"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const db = getFirestore(app);

async function sendEmail(custName, custEmail, custProject, custTimeline){
  const emailTemplate = {
    to: ['sawyerco21@ecu.edu'],
    message: {
      subject: 'Hello from CIEI!',
      text: 'There was a new application submitted on CIEI Labs! \n\n Give a warm welcome to ' + custName + ' (' + custEmail + ') Project:' + custProject + ' Timeline: ' + custTimeline,
      html: 'This is the <code>HTML</code> section of the email body.',
    }
  }

  try {
    const docRef = await addDoc(collection(db, "mail"), emailTemplate);
    //console.log("Document written with ID: ", docRef.id);
  } catch (e){
    console.error('Error Adding Document: ', e);
  }


  
}


async function postDocument(name, email, project_name, funding_checkbox,work_text, support_text,timeline_text, additional_text){
  try {
    const docRef = await addDoc(collection(db, "lab_apply"), {
      name:  name,
      email: email,
      project_name: project_name,
      funding_checkbox: funding_checkbox,
      work_text: work_text,
      support_text: support_text,
      timeline_text: timeline_text,
      additional_text: additional_text
    });
    sendEmail(name, email, project_name, timeline_text);
    //console.log("Document written with ID: ", docRef.id);
  } catch (e){
    console.error('Error Adding Document: ', e);
  }
}

// Update Information in Innovation Lab Firestore
function getFieldData(){
    var name = document.getElementById('apply_modal_name').value;
    var email = document.getElementById('apply_modal_email').value;
    var project_name = document.getElementById('apply_modal_project_name').value;
    var funding_checkbox = document.getElementById('apply_modal_funding_checkbox').checked;
    var work_text = document.getElementById('apply_modal_work_text').value;
    var support_text = document.getElementById('apply_modal_support_text').value;
    var timeline_text = document.getElementById('apply_modal_timeline_text').value;
    var additional_text = document.getElementById('apply_modal_additional_text').value;

    /*console.log(name);
    console.log(email);
    console.log(project_name);
    console.log(funding_checkbox);
    console.log(work_text);
    console.log(support_text);
    console.log(timeline_text);
    console.log(additional_text);*/

    // Add a new document with a generated id.
    if (name != "" && email != "" && project_name != "" && work_text != "" && support_text != "" && timeline_text != ""){
      try{
        postDocument(name, email, project_name, funding_checkbox,work_text, support_text,timeline_text, additional_text);
      } catch (e) {
        console.error(e);
      }
      document.getElementById('applyModalCancel').click()
      $('#apply_submitted_modal').modal('show');
    }
    else {
      document.getElementById('apply_modal_error_text').style.display = "block";
    }

}

document.getElementById('applyModalSubmit').addEventListener('click', event => {
  console.log("Submit Clicked");
  getFieldData();
})


