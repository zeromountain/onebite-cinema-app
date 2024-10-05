import MoviePage from "@/app/movie/[id]/page";
import Modal from "@/components/common/modal";

export default function MovieModal({ ...props }: { params: { id: string } }) {
  return (
    <Modal id={props.params.id}>
      <MoviePage {...props} />
    </Modal>
  );
}
