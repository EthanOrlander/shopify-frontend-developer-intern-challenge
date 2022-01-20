import {
  Card,
  TextContainer,
  SkeletonDisplayText,
  SkeletonBodyText,
} from '@shopify/polaris';

export function SkeletonAPODCard() {
  return (
    <Card sectioned>
      <TextContainer>
        <SkeletonDisplayText size="small" />
        <SkeletonBodyText />
      </TextContainer>
    </Card>
  );
}
