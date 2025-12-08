import { Metadata } from "next";
import { fetchFaqData } from "../data/faq-data";
import "./faq.css";
import { kanit, teko } from "../layout";

export const metadata: Metadata = {
  title: "FAQ",
};

export default async function Page() {
  const faqData = await fetchFaqData();

  return (
    <div className="faq-page-container">
      {faqData.map((item) => {
        return (
          <div key={item.id} className="faq-item-container">
            <div className={`faq-question ${teko.className}`}>
              {item.question}
            </div>
            <div className={`faq-answer ${kanit.className}`}>{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
