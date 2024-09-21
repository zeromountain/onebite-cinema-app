export default function MoviePage({ params }: { params: { id: string } }) {
  return <div>{params.id} 영화 페이지</div>;
}
