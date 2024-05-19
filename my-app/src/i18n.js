import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Move Shape": "เลื่อนรูปภาพ",
      "Move Position": "เปลี่ยนตำแหน่ง",
      "Home Page": "หน้าหลัก",
      Form: "การจัดการฟอร์ม",
      Thai: "ภาษาไทย",
      English: "ภาษาอังกฤษ",
      Prefix: "คำนำหน้า",
      Firstname: "ชื่อจริง",
      Lastname: "นามสกุล",
      "Date of birth": "วันเกิด",
      Nationality: "สัญชาติ",
      "ID CARD": "บัตรประชาชน",
      Gender: "เพศ",
      Male: "ชาย",
      Female: "หญิง",
      "Gender not specified": "ไม่ระบุ",
      Phone: "โทรศัพท์",
      Passport: "หนังสือเดินทาง",
      "Expected Salary": "เงินเดือนที่คาดหวัง",
      Reset: "ล้างข้อมูล",
      Submit: "ส่งข้อมูล",
      Mr: "นาย",
      Ms: "นางสาว",
      Mrs: "นาง",
    },
  },
  en: {
    translation: {
      "Layout & Style": "Layout & Style",
      "Move Shape": "Move Shape",
      "Move Position": "Move Position",
      "Home Page": "Home Page",
      Form: "Form",
      Thai: "Thai",
      English: "English",
      Prefix: "Prefix",
      Firstname: "Firstname",
      Lastname: "Lastname",
      "Date of birth": "Date of birth",
      Nationality: "Nationality",
      "ID CARD": "ID CARD",
      Gender: "Gender",
      Male: "Male",
      Female: "Female",
      "Gender not specified": "Gender not specified",
      Phone: "Phone",
      Passport: "Passport",
      "Expected Salary": "Expected Salary",
      Reset: "Reset",
      Submit: "Submit",
      Mr: "Mr",
      Ms: "Ms",
      Mrs: "Mrs",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
