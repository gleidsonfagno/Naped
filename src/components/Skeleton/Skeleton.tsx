// components/Skeleton/Skeleton.tsx
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const SkeletonBox = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  width: 100%;
  height: 200px;
  max-height: 100%;
  margin-bottom: 16px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #A3A3A3;
    }
    50% {
      background-color: #151b26;
    }
    100% {
      background-color: #090E18;
    }
  }
`;

const SkeletonText = styled.div`
  background-color: #818181;
  border-radius: 4px;
  width: 50%;
  height: 16px;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonTag = styled.div`
    
  border-radius: 4px;
  width: 10%;
  height: 16px;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite ease-in-out;
`

export function Skeleton() {
  return (
    <SkeletonWrapper>
      <SkeletonBox />
      <SkeletonText />
      <SkeletonText />
      <SkeletonTag />
    </SkeletonWrapper>
  );
}
