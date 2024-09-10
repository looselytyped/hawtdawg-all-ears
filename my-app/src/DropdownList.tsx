import React, { useState } from "react";
import "./DropdownList.scss";

// Интерфейс для данных списка
interface DropdownItem {
  title: string;
  count: number;
  description?: string;
  items?: string[]; // Вложенные элементы
}

// Данные для списков
const dropdownData: DropdownItem[] = [
  { title: "ПУБ: Патенты на изобретения", count: 5 },
  { title: "ПУБ: Заявки на пром. образцы", count: 1 },
  { title: "ПУБ: Патенты на Пром. образцы", count: 6 },
  { title: "ИЗВ: Заявки на изобретения", count: 27 },
  { title: "ИЗВ: Патенты на изобретения", count: 41 },
];

const additionalInfo: DropdownItem[] = [
  { title: "FC9A Авто 3", count: 0, description: "Отказ в выдаче евразийского патента на изобретение" },
  { title: "HC1A P Созд.", count: 0, description: "Изменение имени или наименования заявителя в евразийской заявке на изобретение" },
  { title: "PC1L", count: 0, description: "Регистрация перехода права на получение патента" },
];

const DropdownList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown-list">
      {dropdownData.map((dropdown, index) => (
        <div key={index} className="dropdown-item">
          <div
            className={`dropdown-header ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleDropdown(index)}
          >
            <span className="arrow">{openIndex === index ? "▼" : "▶"}</span>
            <span>{dropdown.title} ({dropdown.count})</span>
          </div>
          {openIndex === index && (
            <div className="dropdown-content">
              <ul>
                {additionalInfo.map((info, idx) => (
                  <li key={idx}>
                    <strong>{info.title}</strong> — {info.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
