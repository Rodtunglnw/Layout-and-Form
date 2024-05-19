import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Headers() {
  const { t, i18n } = useTranslation();

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    window.location.href = "/layout/" + selectedLang;
  };

  return (
    <div>
      <div className="flex justify-between m-20">
        <div className="text-3xl font-bold">{t("Layout & Style")}</div>
        <div>
          <select onChange={handleChangeLang} value={i18n.language}>
            <option value="th">{t("Thai")}</option>
            <option value="en">{t("English")}</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={`/`}>
          <button className="relative right-[80px] bg-white rounded-md p-[5px]">
            {t("Home Page")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Headers;
