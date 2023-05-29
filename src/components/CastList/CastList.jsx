import { BASE_IMG_URL } from '../../constants/constantsApi';
import NoImage from '../../asset/No-Image-Placeholder.png';
import {
  CastListStyled,
  CastListItem,
  CastListPoster,
  CastListName,
} from './CastList.styled';
export const CastList = ({ credits }) => {
  return (
    <div>
      <CastListStyled>
        {credits.map(credit => {
          return (
            <CastListItem key={credit.credit_id}>
              {credit.profile_path ? (
                <CastListPoster
                  src={BASE_IMG_URL + '/w500' + credit.profile_path}
                  alt=""
                />
              ) : (
                <CastListPoster src={NoImage} alt="" />
              )}

              <CastListName>{credit.name}</CastListName>
            </CastListItem>
          );
        })}
      </CastListStyled>
    </div>
  );
};
