import {MediaCard, Icon, Button, Toast} from '@shopify/polaris';
import styled from 'styled-components';
import {HeartMajor, ShareMinor} from '@shopify/polaris-icons';
import moment from 'moment';
import {useState, useCallback} from 'react';

import {APODResult} from '../APOD';

interface APODCardProps {
  item: APODResult;
  liked: boolean;
  setLiked: (liked: boolean) => void;
}

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 100%;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;

const ShareButtonContainer = styled.div`
  position: relative;
  float: right;
`;

export function APODCard({
  item: {title, explanation, hdurl, url, date},
  liked,
  setLiked,
}: APODCardProps) {
  // TODO Trigger heart overlay animation in this handler
  const handleLike = () => setLiked(!liked);

  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Image url copied to clipboard" onDismiss={toggleActive} />
  ) : null;

  const handleShare = () => {
    toggleActive();
    navigator.clipboard.writeText(hdurl ? hdurl : url);
  };

  const media = (
    <Container>
      <Image
        alt={title}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          cursor: 'pointer',
        }}
        src={hdurl ? hdurl : url}
        // I'm comfortable with the semantics & a11y of clickable image here as there is also a like button below
        onDoubleClick={handleLike}
      />
      <OverlayTop>{title}</OverlayTop>
      <OverlayBottom>
        <Button
          icon={() => (
            <Icon
              source={() => (
                <HeartMajor style={{fill: liked ? 'red' : 'white'}} />
              )}
            />
          )}
          accessibilityLabel="Like"
          onClick={handleLike}
          plain
        />
        <ShareButtonContainer>
          <Button
            icon={() => (
              <Icon source={() => <ShareMinor style={{fill: 'white'}} />} />
            )}
            plain
            accessibilityLabel="Share"
            onClick={handleShare}
          />
          {toastMarkup}
        </ShareButtonContainer>
      </OverlayBottom>
    </Container>
  );

  return (
    <MediaCard
      portrait
      title={moment(date).format('MMM. D, YYYY')}
      description={explanation}
      // popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
      {media}
    </MediaCard>
  );
}
