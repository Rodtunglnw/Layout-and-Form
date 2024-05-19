import HeadersForm from "../Components/HeadersForm";
import MyForm from "../Components/MyForm";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FormPage() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  i18n.changeLanguage(lang);
  return (
    <div>
      <HeadersForm />
      <MyForm />
    </div>
  );
}

export default FormPage;
