import { Card } from "../../../Components/Card";

export function Features() {
  const card1 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 1",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };
  const card2 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 2",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };
  const card3 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 3",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };
  const card4 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 4",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };
  const card5 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 5",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };
  const card6 = {
    img: "https://via.placeholder.com/64x64.png?text=495x670",
    title: "Başlık 6",
    text: "loremdaşlawkşawlkdkşlwqadkşlawlşkdawlşkklş",
  };

  return (
    <section className="pt-4">
      <div className="container">
        <div className="row">
          <Card img={card1.img} title={card1.title} text={card1.text}></Card>
          <Card img={card2.img} title={card2.title} text={card2.text}></Card>
          <Card img={card3.img} title={card3.title} text={card3.text}></Card>
          <Card img={card4.img} title={card4.title} text={card4.text}></Card>
          <Card img={card5.img} title={card5.title} text={card5.text}></Card>
          <Card img={card6.img} title={card6.title} text={card6.text}></Card>
        </div>
      </div>
    </section>
  );
}
