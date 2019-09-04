import { withTranslation, Link } from '../i18n';
import css from '../styles.css';

const DinosaurCard = ({ dinosaur, t }) => {
  return (
    // Let's take the Link out of the index and use it here
    <Link path='/dinosaur' params={{ dinosaur: dinosaur.name }}>
      <a>
        <div className={css.dinosaurCard}>
          <img src={dinosaur.image} />
          <h2>{t('dinosaur:myNameIs', { dinosaur: dinosaur.name })}</h2>
          <h3>{t('dinosaurCard:diet', { diet: dinosaur.diet })}</h3>
          <div>
            <div>
              <p>
                <span>{t('dinosaur:length')}:</span>
                {dinosaur.length}
              </p>
              <p>
                <span>{t('dinosaur:weight')}:</span>
                {dinosaur.weight}
              </p>
            </div>
            <p>{dinosaur.info}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default withTranslation(['dinosaur', 'dinosaurCard'])(DinosaurCard);
