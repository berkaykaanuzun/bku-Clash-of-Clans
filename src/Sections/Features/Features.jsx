/* eslint-disable react/jsx-key */
import { Card } from "../../Components/Card";

export function Features() {
  const cards = [
    {
      iconName: "phone",
      title: "songül",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
    {
      iconName: "phone",
      title: "Başlık 2",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
    {
      iconName: "phone",
      title: "Berkay",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
    {
      iconName: "phone",
      title: "Başlık 4",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
    {
      iconName: "phone",
      title: "Başlık 5",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
    {
      iconName: "phone",
      title: "Başlık 6",
      text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
    },
  ];

  return (
    <section className="pt-4">
      <div className="container">
        <div className="row">
          {cards.map((item) => (
            <Card
              iconName={item.iconName}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
