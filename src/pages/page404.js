import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Trang Không tìm thấy</h1>
      <p>Trang không tồn tại</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}