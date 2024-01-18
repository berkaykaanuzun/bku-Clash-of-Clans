/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export function Card(props) {
  return (
    <>
      <div className="wrapper">
        <div className={`clash-card ${props.character}`}>
          <div
            className={`clash-card__image clash-card__image--${props.character}`}
          >
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/${props.character}.png`}
              alt={props.character}
            />
          </div>
          <div
            className={`clash-card__level clash-card__level--${props.character}`}
          >
            {props.level}
          </div>
          <div className="clash-card__unit-name">{`The ${props.character}`}</div>
          <div className="clash-card__unit-description">{props.text}</div>

          <div
            className={`clash-card__unit-stats clash-card__unit-stats--${props.character} clearfix`}
          >
            <div className="one-third">
              <div className="stat">
                20<sup>S</sup>
              </div>
              <div className="stat-value">Training</div>
            </div>

            <div className="one-third">
              <div className="stat">{props.speed}</div>
              <div className="stat-value">Speed</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">{props.cost}</div>
              <div className="stat-value">Cost</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
