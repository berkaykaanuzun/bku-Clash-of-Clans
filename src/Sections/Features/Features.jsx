import { useBlazeSlider } from "../../Components/useBlazeSlider";
import "blaze-slider/dist/blaze.css";

/* eslint-disable react/jsx-key */
import { Card } from "../../Components/Card";

export function Features() {
  const elRef = useBlazeSlider({
    all: {
      enableAutoplay: true,
      autoplayInterval: 2000,
      transitionDuration: 300,
      transitionTimingFunction: 'linear',
      slidesToShow: 3,
    },
    '(max-width: 1200px)': {
      slidesToShow: 2,
    },
    '(max-width: 768px)': {
      slidesToShow: 1,
    },
  });
  const cards = [
    {
      character: "barbarian",
      background: "barbarian",
      image: "barbarian.webp",
      level: 4,
      text: "askjldaskldj The Barbarian is a kilt-clad Scottish warrior with an angry,\
      battle ready expression, hungry for destruction. He has Killer\
      yellow horseshoe mustache.",
      training: {
        value: 20,
        time: "S",
      },
      speed: 16,
      cost: 150,
    },

    {
      character: "archer",
      background: "archer",
      image: "archer.webp",
      level: 5,
      text: "BKU The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch..",
      training: {
        value: 25,
        time: "S",
      },
      speed: 24,
      cost: 300,
    },
    {
      character: "giant",
      background: "giant",
      image: "giant.webp",
      level: 5,
      text: "BKU The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you'll see their fury unleashed! small pouch..",
      training: {
        value: 2,
        time: "M",
      },
      speed: 12,
      cost: 2250,
    },
    {
      character: "goblin",
      background: "goblin",
      image: "goblin.webp",
      level: 5,
      text: "BKU These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",
      training: {
        value: 30,
        time: "S",
      },
      speed: 32,
      cost: 100,
    },
    {
      character: "wizard",
      background: "wizard",
      image: "wizard.webp",
      level: 6,
      text: "BKU The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "dragon",
      background: "dragon",
      image: "dragon.webp",
      level: 6,
      text: "BKU The Dragon is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "balloon",
      background: "balloon",
      image: "balloon.webp",
      level: 6,
      text: "BKU The balloon is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "hog-rider",
      background: "hog-rider",
      image: "hog-rider.webp",
      level: 6,
      text: "BKU The Hog Rider is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "pekka",
      background: "pekka",
      image: "pekka.webp",
      level: 6,
      text: "BKU The Pekka is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "lava-hound",
      background: "lava-hound",
      image: "lava-hound.webp",
      level: 6,
      text: "BKU The Dragon is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
    {
      character: "wall-breaker",
      background: "wall-breaker",
      image: "wall-breaker.webp",
      level: 6,
      text: "BKU The wall-breaker is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      training: {
        value: 5,
        time: "M",
      },
      speed: 16,
      cost: 4000,
    },
  ];

  return (
    <div className="blaze-slider" ref={elRef}>
      <div className="blaze-container container">
        <div className="blaze-track-container ">
          <div className="blaze-track">
            {cards.map((item) => (
              <Card
                character={item.character}
                background={item.background}
                image={item.image}
                title={item.title}
                text={item.text}
                value={item.training.value}
                time={item.training.time}
                speed={item.speed}
                cost={item.cost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
