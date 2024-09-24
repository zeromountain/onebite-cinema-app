export const getImageDataUrl = async (src: string) => {
  // 이미지 데이터 가져오기
  const response = await fetch(src);
  const blob = await response.blob();
  // const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(await blob.arrayBuffer());

  // Base64로 인코딩
  const base64 = buffer.toString("base64");
  const extension = blob.type.split("/")[1];

  return `data:${extension};base64,${base64}`;
};
