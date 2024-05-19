import Headers from "../Components/Headers";
import Contents from "../Components/Contents";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ContentPage() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  i18n.changeLanguage(lang);
  return (
    <div>
      <Headers />
      <Contents />
    </div>
  );
}

export default ContentPage;
